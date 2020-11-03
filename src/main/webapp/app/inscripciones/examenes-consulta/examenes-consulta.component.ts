import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse, HttpHeaders } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription, combineLatest } from 'rxjs';
import { ActivatedRoute, ParamMap, Router, Data } from '@angular/router';
import { JhiEventManager } from 'ng-jhipster';

import { ITEMS_PER_PAGE } from 'app/shared/constants/pagination.constants';
import { InscripcionesService } from 'app/core/inscripciones/inscripciones.service';
import { IExamenConsulta } from 'app/core/inscripciones/examenconsulta.model';
import { AccountService } from 'app/core/auth/account.service';
import { Account } from 'app/core/user/account.model';
import { ExamenesCancelarComponent } from './examenes-cancelar.component';

@Component({
  selector: 'jhi-examenes-consulta-mgmt',
  templateUrl: './examenes-consulta.component.html',
})
export class ExamenesConsultaManagementComponent implements OnInit, OnDestroy {
  currentAccount: Account | null = null;
  lstexamenes: IExamenConsulta[] | null = null;
  authSubscription?: Subscription;
  examenesListSubscription?: Subscription;
  totalItems = 0;
  itemsPerPage = ITEMS_PER_PAGE;
  page!: number;
  predicate!: string;
  ascending!: boolean;

  constructor(
    private accountService: AccountService,
    private inscripcionesService: InscripcionesService,
    private router: Router,
    private eventManager: JhiEventManager,
    private activatedRoute: ActivatedRoute,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.accountService.identity().subscribe(currentAccount => (this.currentAccount = currentAccount));
    this.examenesListSubscription = this.eventManager.subscribe('examenesListSubscription', () => this.loadAll());
    this.handleNavigation();
  }

  ngOnDestroy(): void {
    if (this.examenesListSubscription) {
      this.eventManager.destroy(this.examenesListSubscription);
    }
  }

  transition(): void {
    this.router.navigate(['./'], {
      queryParams: {
        page: this.page,
        sort: this.predicate + ',' + (this.ascending ? 'asc' : 'desc'),
      },
    });
  }

  private handleNavigation(): void {
    combineLatest(this.activatedRoute.data, this.activatedRoute.queryParamMap, (data: Data, params: ParamMap) => {
      const page = params.get('page');
      this.page = page !== null ? +page : 1;
      const sort = (params.get('sort') ?? data['defaultSort']).split(',');
      this.predicate = sort[0];
      this.ascending = sort[1] === 'asc';
      this.loadAll();
    }).subscribe();
  }

  private loadAll(): void {
    this.inscripcionesService
      .traerInscripcionesEstudianteExamen(
        {
          page: this.page - 1,
          size: this.itemsPerPage,
          sort: this.sort(),
        },
        this.currentAccount?.id
      )
      .subscribe((res: HttpResponse<IExamenConsulta[]>) => this.onSuccess(res.body, res.headers));
  }

  private sort(): string[] {
    const result = [this.predicate + ',' + (this.ascending ? 'asc' : 'desc')];
    if (this.predicate !== 'idEstudiante') {
      result.push('idEstudiante');
    }
    return result;
  }

  private onSuccess(lstexamenes: IExamenConsulta[] | null, headers: HttpHeaders): void {
    this.totalItems = Number(headers.get('X-Total-Count'));
    this.lstexamenes = lstexamenes;
  }

  cancelarExamen(examen: IExamenConsulta): void {
    const modalRef = this.modalService.open(ExamenesCancelarComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.examen = examen;
  }
}

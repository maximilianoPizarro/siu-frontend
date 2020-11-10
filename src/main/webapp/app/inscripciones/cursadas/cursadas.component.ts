import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse, HttpHeaders } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription, combineLatest } from 'rxjs';
import { ActivatedRoute, ParamMap, Router, Data } from '@angular/router';
import { JhiEventManager } from 'ng-jhipster';

import { ITEMS_PER_PAGE } from 'app/shared/constants/pagination.constants';
import { InscripcionesService } from 'app/core/inscripciones/inscripciones.service';
import { IMaterias } from 'app/core/inscripciones/materias.model';
import { AccountService } from 'app/core/auth/account.service';
import { Account } from 'app/core/user/account.model';
import { CursadaIncripcionComponent } from './cursada-incripcion.component';
import { ICursadaIncripcion } from 'app/core/inscripciones/cursadainscripcion.model';

@Component({
  selector: 'jhi-cursadas-mgmt',
  templateUrl: './cursadas.component.html',
})
export class CursadasManagementComponent implements OnInit, OnDestroy {
  currentAccount: Account | null = null;
  authSubscription?: Subscription;
  lstcursadas: IMaterias[] | null = null;
  materia?: IMaterias;
  cursadasListSubscription?: Subscription;
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
    this.accountService.identity().subscribe(account => (this.currentAccount = account));
    this.cursadasListSubscription = this.eventManager.subscribe('cursadasListSubscription', () => this.loadAll());
    this.handleNavigation();
  }

  ngOnDestroy(): void {
    if (this.cursadasListSubscription) {
      this.eventManager.destroy(this.cursadasListSubscription);
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
      .traerMateriasParaInscripcion(
        {
          page: this.page - 1,
          size: this.itemsPerPage,
          sort: this.sort(),
        },
        this.currentAccount?.id
      )
      .subscribe((res: HttpResponse<IMaterias[]>) => this.onSuccess(res.body, res.headers));
  }

  private sort(): string[] {
    const result = [this.predicate + ',' + (this.ascending ? 'asc' : 'desc')];
    if (this.predicate !== 'id') {
      result.push('id');
    }
    return result;
  }

  private onSuccess(lstcursadas: IMaterias[] | null, headers: HttpHeaders): void {
    this.totalItems = Number(headers.get('X-Total-Count'));
    this.lstcursadas = lstcursadas;
  }

  incribirse(materia: ICursadaIncripcion): void {
    const modalRef = this.modalService.open(CursadaIncripcionComponent, { size: 'lg', backdrop: 'static' });
    materia.idEstudiante = this.currentAccount?.id;
    materia.recordatorio = true;
    modalRef.componentInstance.materia = materia;
  }
}

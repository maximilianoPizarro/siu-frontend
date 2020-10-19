import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse, HttpHeaders } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription, combineLatest } from 'rxjs';
import { ActivatedRoute, ParamMap, Router, Data } from '@angular/router';
import { JhiEventManager } from 'ng-jhipster';

import { ITEMS_PER_PAGE } from 'app/shared/constants/pagination.constants';
import { InscripcionesService } from 'app/core/inscripciones/inscripciones.service';
import { Examenes, IExamenes } from 'app/core/inscripciones/examenes.model';

@Component({
  selector: 'jhi-examenes-mgmt',
  templateUrl: './examenes.component.html',
})
export class ExamenesManagementComponent implements OnInit, OnDestroy {
  lstexamenes: Examenes[] | null = null;
  examenesListSubscription?: Subscription;
  totalItems = 0;
  itemsPerPage = ITEMS_PER_PAGE;
  page!: number;
  predicate!: string;
  ascending!: boolean;

  constructor(
    private inscripcionesService: InscripcionesService,
    private router: Router,
    private eventManager: JhiEventManager,
    private activatedRoute: ActivatedRoute,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
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
      .traerExamenesParaInscripcion()
      .subscribe((res: HttpResponse<Examenes[]>) => this.onSuccess(res.body, res.headers));
  }

  private sort(): string[] {
    const result = [this.predicate + ',' + (this.ascending ? 'asc' : 'desc')];
    if (this.predicate !== 'id') {
      result.push('id');
    }
    return result;
  }

  private onSuccess(examenes: Examenes[] | null, headers: HttpHeaders): void {
    this.totalItems = Number(headers.get('X-Total-Count'));
    this.lstexamenes = examenes;
  }
}

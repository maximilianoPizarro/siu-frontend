import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse, HttpHeaders } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription, combineLatest } from 'rxjs';
import { ActivatedRoute, ParamMap, Router, Data } from '@angular/router';
import { JhiEventManager } from 'ng-jhipster';

import { ITEMS_PER_PAGE } from 'app/shared/constants/pagination.constants';
import { ProfesorService } from 'app/core/profesor/profesor.service';
import { Profesor } from 'app/core/profesor/profesor.model';
import { ProfesorManagementDeleteDialogComponent } from './profesor-management-delete-dialog.component';

@Component({
  selector: 'jhi-profesor-mgmt',
  templateUrl: './profesor-management.component.html',
})
export class ProfesorManagementComponent implements OnInit, OnDestroy {
  currentAccount: Account | null = null;
  profesores: Profesor[] | null = null;
  profesorListSubscription?: Subscription;
  totalItems = 0;
  itemsPerPage = ITEMS_PER_PAGE;
  page!: number;
  predicate!: string;
  ascending!: boolean;

  constructor(
    private profesorService: ProfesorService,
    private router: Router,
    private eventManager: JhiEventManager,
    private activatedRoute: ActivatedRoute,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.profesorListSubscription = this.eventManager.subscribe('profesorListSubscription', () => this.loadAll());
    this.handleNavigation();
  }

  ngOnDestroy(): void {
    if (this.profesorListSubscription) {
      this.eventManager.destroy(this.profesorListSubscription);
    }
  }

  deleteProfesor(profesor: Profesor): void {
    const modalRef = this.modalService.open(ProfesorManagementDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.profesor = profesor;
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
    this.profesorService
      .query({
        page: this.page - 1,
        size: this.itemsPerPage,
        sort: this.sort(),
      })
      .subscribe((res: HttpResponse<Profesor[]>) => this.onSuccess(res.body, res.headers));
  }

  private sort(): string[] {
    const result = [this.predicate + ',' + (this.ascending ? 'asc' : 'desc')];
    if (this.predicate !== 'id') {
      result.push('id');
    }
    return result;
  }

  private onSuccess(profesores: Profesor[] | null, headers: HttpHeaders): void {
    this.totalItems = Number(headers.get('X-Total-Count'));
    this.profesores = profesores;
  }
}

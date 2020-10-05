import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse, HttpHeaders } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription, combineLatest } from 'rxjs';
import { ActivatedRoute, ParamMap, Router, Data } from '@angular/router';
import { JhiEventManager } from 'ng-jhipster';

import { ITEMS_PER_PAGE } from 'app/shared/constants/pagination.constants';
import { MateriaService } from 'app/core/materia/materia.service';
import { Materia } from 'app/core/materia/materia.model';
import { MateriaManagementDeleteDialogComponent } from './materia-management-delete-dialog.component';

@Component({
  selector: 'jhi-materia-mgmt',
  templateUrl: './materia-management.component.html',
})
export class MateriaManagementComponent implements OnInit, OnDestroy {
  currentAccount: Account | null = null;
  materias: Materia[] | null = null;
  materiaListSubscription?: Subscription;
  totalItems = 0;
  itemsPerPage = ITEMS_PER_PAGE;
  page!: number;
  predicate!: string;
  ascending!: boolean;

  constructor(
    private materiaService: MateriaService,
    private router: Router,
    private eventManager: JhiEventManager,
    private activatedRoute: ActivatedRoute,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.materiaListSubscription = this.eventManager.subscribe('materiaListSubscription', () => this.loadAll());
    this.handleNavigation();
  }

  ngOnDestroy(): void {
    if (this.materiaListSubscription) {
      this.eventManager.destroy(this.materiaListSubscription);
    }
  }

  deleteMateria(materia: Materia): void {
    const modalRef = this.modalService.open(MateriaManagementDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.materia = materia;
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
    this.materiaService
      .query({
        page: this.page - 1,
        size: this.itemsPerPage,
        sort: this.sort(),
      })
      .subscribe((res: HttpResponse<Materia[]>) => this.onSuccess(res.body, res.headers));
  }

  private sort(): string[] {
    const result = [this.predicate + ',' + (this.ascending ? 'asc' : 'desc')];
    if (this.predicate !== 'id') {
      result.push('id');
    }
    return result;
  }

  private onSuccess(materias: Materia[] | null, headers: HttpHeaders): void {
    this.totalItems = Number(headers.get('X-Total-Count'));
    this.materias = materias;
  }
}

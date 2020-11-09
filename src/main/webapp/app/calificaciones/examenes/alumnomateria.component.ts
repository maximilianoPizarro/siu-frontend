import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpResponse, HttpHeaders } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { JhiEventManager } from 'ng-jhipster';

import { ITEMS_PER_PAGE } from 'app/shared/constants/pagination.constants';

import { IMateriaAlumnoExamen } from 'app/core/calificaciones/materiaalumnoexamen';
import { AccountService } from 'app/core/auth/account.service';
import { Account } from 'app/core/user/account.model';
import { CalificacionesService } from 'app/core/calificaciones/calificaciones.service';
import { ITraerMateria, Calificacion } from 'app/core/calificaciones/calificacion.model';
import { Materia } from 'app/core/calificaciones/materia.model';
import { ExportAsService, ExportAsConfig } from 'ngx-export-as';
import { CalificarComponent } from './calificar.component';
import { CalificarExcelComponent } from './calificar-excel.component';

@Component({
  selector: 'jhi-alumnomateria-mgmt',
  templateUrl: './alumnomateria.component.html',
})
export class AlumnoMateriasManagementComponent implements OnInit, OnDestroy {
  lstexamenes: IMateriaAlumnoExamen[] | null = null;
  calificacion?: ITraerMateria;
  currentAccount: Account | null = null;
  authSubscription?: Subscription;
  examenesListSubscription?: Subscription;
  materia: Materia | null = null;
  totalItems = 0;
  itemsPerPage = ITEMS_PER_PAGE;
  page!: number;
  predicate!: string;
  ascending!: boolean;

  constructor(
    private route: ActivatedRoute,
    private accountService: AccountService,
    private calificacionesService: CalificacionesService,
    private router: Router,
    private eventManager: JhiEventManager,
    private activatedRoute: ActivatedRoute,
    private modalService: NgbModal,
    private exportAsService: ExportAsService
  ) {}

  ngOnInit(): void {
    this.accountService.identity().subscribe(currentAccount => (this.currentAccount = currentAccount));
    this.route.data.subscribe(({ materia }) => (this.materia = materia));
    this.loadAll();
  }

  ngOnDestroy(): void {
    if (this.examenesListSubscription) {
      this.eventManager.destroy(this.examenesListSubscription);
    }
  }

  private loadAll(): void {
    this.calificacion = new Calificacion(this.currentAccount?.id, this.materia?.idMateria);

    this.examenesListSubscription = this.calificacionesService
      .traerAlumnosPorMateriaExamen(
        {
          page: this.page - 1,
          size: this.itemsPerPage,
          sort: this.sort(),
        },
        this.calificacion
      )
      .subscribe((res: HttpResponse<IMateriaAlumnoExamen[]>) => this.onSuccess(res.body, res.headers));
  }

  private sort(): string[] {
    const result = [this.predicate + ',' + (this.ascending ? 'asc' : 'desc')];
    if (this.predicate !== 'idEstudiante') {
      result.push('idEstudiante');
    }
    return result;
  }

  private onSuccess(lstexamenes: IMateriaAlumnoExamen[] | null, headers: HttpHeaders): void {
    this.totalItems = Number(headers.get('X-Total-Count'));
    this.lstexamenes = lstexamenes;
  }

  exportExcel(): void {
    const exportAsConfig: ExportAsConfig = {
      type: 'xlsx',
      elementIdOrContent: 'excel',
    };
    this.exportAsService.save(exportAsConfig, 'Listado_Alumnos').subscribe(() => {});
  }

  calificarCursada(examen: IMateriaAlumnoExamen, currentAccount: Account | null): void {
    const modalRef = this.modalService.open(CalificarComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.examen = examen;
    modalRef.componentInstance.currentAccount = currentAccount;
  }

  calificarExcel(currentAccount: Account | null): void {
    const modalRef = this.modalService.open(CalificarExcelComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.materia = this.materia;
    modalRef.componentInstance.currentAccount = currentAccount;
  }
}

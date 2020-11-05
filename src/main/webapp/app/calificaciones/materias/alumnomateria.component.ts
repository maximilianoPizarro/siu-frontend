import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpHeaders } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { JhiEventManager } from 'ng-jhipster';

import { ITEMS_PER_PAGE } from 'app/shared/constants/pagination.constants';

import { IMateriaAlumno } from 'app/core/calificaciones/materiaalumno';
import { AccountService } from 'app/core/auth/account.service';
import { CalificacionesService } from 'app/core/calificaciones/calificaciones.service';
import { ITraerMateria, Calificacion } from 'app/core/calificaciones/calificacion.model';

@Component({
  selector: 'jhi-alumnomateria-mgmt',
  templateUrl: './alumnomateria.component.html',
})
export class AlumnoMateriasManagementComponent implements OnInit {
  lstexamenes: IMateriaAlumno[] | null = null;
  calificacion?: ITraerMateria;
  currentAccount: Account | null = null;
  authSubscription?: Subscription;
  examenesListSubscription?: Subscription;
  idMateria: any;
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
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe(({ idMateria }) => (this.idMateria = idMateria));
    this.loadAll();
  }

  private loadAll(): void {
    this.calificacion = new Calificacion(31, 10);

    this.examenesListSubscription = this.calificacionesService
      .listadoAlumnosPorMateria(
        {
          page: this.page - 1,
          size: this.itemsPerPage,
          sort: this.sort(),
        },
        this.calificacion
      )
      .subscribe((res: HttpResponse<IMateriaAlumno[]>) => this.onSuccess(res.body, res.headers));
  }

  private sort(): string[] {
    const result = [this.predicate + ',' + (this.ascending ? 'asc' : 'desc')];
    if (this.predicate !== 'idEstudiante') {
      result.push('idEstudiante');
    }
    return result;
  }

  private onSuccess(lstexamenes: IMateriaAlumno[] | null, headers: HttpHeaders): void {
    this.totalItems = Number(headers.get('X-Total-Count'));
    this.lstexamenes = lstexamenes;
  }
}

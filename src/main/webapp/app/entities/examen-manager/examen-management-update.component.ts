import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Examen } from 'app/core/examen/examen.model';
import { ExamenService } from 'app/core/examen/examen.service';
import { IProfesor, Profesor } from 'app/core/profesor/profesor.model';
import { ProfesorService } from 'app/core/profesor/profesor.service';

@Component({
  selector: 'jhi-examen-mgmt-update',
  templateUrl: './examen-management-update.component.html',
})
export class ExamenManagementUpdateComponent implements OnInit, OnDestroy {
  examen!: Examen;
  profesores: Profesor[] | null = null;
  profesorListSubscription?: any;
  profesorAsignado!: IProfesor;
  profesorAsignadoListSubscription?: any;
  isSaving = false;
  totalItems = 0;
  itemsPerPage = 20;
  page!: number;
  predicate!: string;
  ascending!: true;

  editForm = this.fb.group({
    idExamenes: [],
    fecha: ['', [Validators.required]],
    horarioInicio: ['', [Validators.required]],
    horarioFin: ['', [Validators.required]],
    docenteAsignado: [],
    inicioInscripcion: ['', [Validators.required]],
    finInscripcion: ['', [Validators.required]],
    MateriasIdMaterias: [],
  });

  constructor(
    private examenService: ExamenService,
    private profesorService: ProfesorService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loadAll();
    this.route.data.subscribe(({ examen }) => {
      if (examen) {
        this.examen = examen;
        this.updateForm(examen);
      }
    });
  }

  ngOnDestroy(): void {
    this.profesorListSubscription.unsubscribe();
    this.profesorAsignadoListSubscription.unsubscribe();
  }

  private loadAll(): void {
    this.profesorListSubscription = this.profesorService
      .query()
      .subscribe((res: HttpResponse<Profesor[]>) => this.onSuccess(res.body, res.headers));
  }

  private onSuccess(profesores: Profesor[] | null, headers: HttpHeaders): void {
    this.totalItems = Number(headers.get('X-Total-Count'));
    this.profesores = profesores;
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    this.updateExamen(this.examen);
    if (this.examen.idExamenes !== undefined) {
      this.examenService.update(this.examen).subscribe(
        () => this.onSaveSuccess(),
        () => this.onSaveError()
      );
    } else {
      this.examenService.create(this.examen).subscribe(
        () => this.onSaveSuccess(),
        () => this.onSaveError()
      );
    }
  }

  private updateForm(examen: Examen): void {
    this.editForm.patchValue({
      idExamenes: examen.idExamenes,
      fecha: examen.fecha,
      horarioInicio: examen.horarioFin,
      horarioFin: examen.horarioFin,
      docenteAsignado: examen.docenteAsignado,
      inicioInscripcion: examen.inicioInscripcion,
      finInscripcion: examen.finInscripcion,
      MateriasIdMaterias: examen.MateriasIdMaterias,
    });
  }

  private findProfesor(id: any): any {
    this.profesorAsignadoListSubscription = this.profesorService.find(id).subscribe((res: IProfesor) => this.onSuccessProfesor(res));
  }
  private onSuccessProfesor(profesor: IProfesor): void {
    this.profesorAsignado = profesor;
  }

  private updateExamen(examen: Examen): void {
    this.findProfesor(this.editForm.get(['docenteAsignado'])!.value);
    examen.fecha = this.editForm.get(['fecha'])!.value;
    examen.horarioInicio = this.editForm.get(['horarioInicio'])!.value;
    examen.horarioFin = this.editForm.get(['horarioFin'])!.value;
    examen.docenteAsignado = this.profesorAsignado;
    examen.inicioInscripcion = this.editForm.get(['inicioInscripcion'])!.value;
    examen.finInscripcion = this.editForm.get(['finInscripcion'])!.value;
    examen.MateriasIdMaterias = this.editForm.get(['MateriasIdMaterias'])!.value;
  }

  private onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  private onSaveError(): void {
    this.isSaving = false;
  }
}

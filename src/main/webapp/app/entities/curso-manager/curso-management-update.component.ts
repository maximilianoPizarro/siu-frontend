import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Curso } from 'app/core/curso/curso.model';
import { CursoService } from 'app/core/curso/curso.service';
import { Materia } from 'app/core/materia/materia.model';
import { MateriaService } from 'app/core/materia/materia.service';
import { Profesor } from 'app/core/profesor/profesor.model';
import { ProfesorService } from 'app/core/profesor/profesor.service';

@Component({
  selector: 'jhi-curso-mgmt-update',
  templateUrl: './curso-management-update.component.html',
})
export class CursoManagementUpdateComponent implements OnInit, OnDestroy {
  curso!: Curso;
  isSaving = false;
  profesores: Profesor[] | null = null;
  materias: Materia[] | null = null;
  profesorListSubscription?: any;
  materiasListSubscription?: any;
  totalItems = 0;

  editForm = this.fb.group({
    idCurso: [],
    datosDocente: [],
    MateriasIdMaterias: [],
    materia: [],
  });

  constructor(
    private cursoService: CursoService,
    private profesorService: ProfesorService,
    private materiaService: MateriaService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loadAllProfesores();
    this.loadAllMaterias();
    this.route.data.subscribe(({ curso }) => {
      if (curso) {
        this.curso = curso;
        this.updateForm(curso);
      }
    });
  }

  ngOnDestroy(): void {
    this.profesorListSubscription.unsubscribe();
    this.materiasListSubscription.unsubscribe();
  }

  private loadAllMaterias(): void {
    this.materiasListSubscription = this.materiaService
      .query()
      .subscribe((res: HttpResponse<Materia[]>) => this.onSuccessMaterias(res.body, res.headers));
  }

  private onSuccessMaterias(materias: Materia[] | null, headers: HttpHeaders): void {
    this.totalItems = Number(headers.get('X-Total-Count'));
    this.materias = materias;
  }

  private loadAllProfesores(): void {
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
    this.updateCurso(this.curso);
    if (this.curso.idCurso !== undefined) {
      this.cursoService.update(this.curso).subscribe(
        () => this.onSaveSuccess(),
        () => this.onSaveError()
      );
    } else {
      this.cursoService.create(this.curso).subscribe(
        () => this.onSaveSuccess(),
        () => this.onSaveError()
      );
    }
  }

  private updateForm(curso: Curso): void {
    this.editForm.patchValue({
      idCurso: curso.idCurso,
      datosDocente: curso.datosDocente,
      materia: curso.materia,
      MateriasIdMaterias: curso.MateriasIdMaterias,
    });
  }

  private updateCurso(curso: Curso): void {
    curso.datosDocente = this.editForm.get(['datosDocente'])!.value[0];
    curso.MateriasIdMaterias = this.editForm.get(['MateriasIdMaterias'])!.value;
  }

  private onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  private onSaveError(): void {
    this.isSaving = false;
  }
}

import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Curso } from 'app/core/curso/curso.model';
import { CursoService } from 'app/core/curso/curso.service';

import { Horario } from 'app/core/horario/horario.model';
import { HorarioService } from 'app/core/horario/horario.service';

@Component({
  selector: 'jhi-horario-mgmt-update',
  templateUrl: './horario-management-update.component.html',
})
export class HorarioManagementUpdateComponent implements OnInit, OnDestroy {
  horario!: Horario;
  isSaving = false;
  cursos: Curso[] | null = null;
  cursosListSubscription?: any;
  totalItems = 0;

  editForm = this.fb.group({
    idHorario: [],
    dia: ['', [Validators.maxLength(50)]],
    horarioInicio: ['', [Validators.required]],
    horarioFin: ['', [Validators.required]],
    CursoIdCurso: [],
  });

  constructor(
    private horarioService: HorarioService,
    private cursoService: CursoService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loadAllCursos();
    this.route.data.subscribe(({ horario }) => {
      if (horario) {
        this.horario = horario;
        this.updateForm(horario);
      }
    });
  }

  ngOnDestroy(): void {
    this.cursosListSubscription.unsubscribe();
  }

  private loadAllCursos(): void {
    this.cursosListSubscription = this.cursoService
      .query()
      .subscribe((res: HttpResponse<Curso[]>) => this.onSuccessCursos(res.body, res.headers));
  }

  private onSuccessCursos(cursos: Curso[] | null, headers: HttpHeaders): void {
    this.totalItems = Number(headers.get('X-Total-Count'));
    this.cursos = cursos;
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    this.updateHorario(this.horario);
    if (this.horario.idHorario !== undefined) {
      this.horarioService.update(this.horario).subscribe(
        () => this.onSaveSuccess(),
        () => this.onSaveError()
      );
    } else {
      this.horarioService.create(this.horario).subscribe(
        () => this.onSaveSuccess(),
        () => this.onSaveError()
      );
    }
  }

  private updateForm(horario: Horario): void {
    this.editForm.patchValue({
      idHorario: horario.idHorario,
      dia: horario.dia,
      horarioInicio: horario.horarioInicio,
      horarioFin: horario.horarioInicio,
    });
  }

  private updateHorario(horario: Horario): void {
    horario.dia = this.editForm.get(['dia'])!.value;
    horario.horarioInicio = this.editForm.get(['horarioInicio'])!.value;
    horario.horarioFin = this.editForm.get(['horarioFin'])!.value;
    horario.CursoIdCurso = this.editForm.get(['CursoIdCurso'])!.value;
  }

  private onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  private onSaveError(): void {
    this.isSaving = false;
  }
}

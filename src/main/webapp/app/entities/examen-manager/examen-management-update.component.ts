import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Examen } from 'app/core/examen/examen.model';
import { ExamenService } from 'app/core/examen/examen.service';

@Component({
  selector: 'jhi-examen-mgmt-update',
  templateUrl: './examen-management-update.component.html',
})
export class ExamenManagementUpdateComponent implements OnInit {
  examen!: Examen;
  isSaving = false;

  editForm = this.fb.group({
    idExamenes: [],
    fecha: ['', [Validators.required]],
    horarioInicio: ['', [Validators.required]],
    horarioFin: ['', [Validators.required]],
    docenteAsignado: ['', [Validators.required]],
    inicioInscripcion: ['', [Validators.required]],
    finInscripcion: ['', [Validators.required]],
    Carreras_idCarreras: [],
    Materias_Carreras_idCarreras: [],
  });

  constructor(private examenService: ExamenService, private route: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.route.data.subscribe(({ examen }) => {
      if (examen) {
        this.examen = examen;
        this.updateForm(examen);
      }
    });
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
      idCarreras: examen.Materias_Carreras_idCarreras,
    });
  }

  private updateExamen(examen: Examen): void {
    examen.fecha = this.editForm.get(['fecha'])!.value;
    examen.horarioInicio = this.editForm.get(['horarioInicio'])!.value;
    examen.horarioFin = this.editForm.get(['horarioFin'])!.value;
    examen.docenteAsignado = this.editForm.get(['docenteAsignado'])!.value;
    examen.inicioInscripcion = this.editForm.get(['inicioInscripcion'])!.value;
    examen.finInscripcion = this.editForm.get(['finInscripcion'])!.value;
  }

  private onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  private onSaveError(): void {
    this.isSaving = false;
  }
}

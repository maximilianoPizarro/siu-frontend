import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Materia } from 'app/core/materia/materia.model';
import { MateriaService } from 'app/core/materia/materia.service';

@Component({
  selector: 'jhi-materia-mgmt-update',
  templateUrl: './materia-management-update.component.html',
})
export class MateriaManagementUpdateComponent implements OnInit {
  materia!: Materia;
  isSaving = false;

  editForm = this.fb.group({
    idMaterias: [],
    nombre: ['', [Validators.maxLength(50)]],
    inicioInscripcion: ['', [Validators.required]],
    finInscripcion: ['', [Validators.required]],
    idCarreras: [],
    idPlan: [],
    idFormaAprobacion: [],
  });

  constructor(private materiaService: MateriaService, private route: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.route.data.subscribe(({ materia }) => {
      if (materia) {
        this.materia = materia;
        this.updateForm(materia);
      }
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    this.updateMateria(this.materia);
    if (this.materia.idMaterias !== undefined) {
      this.materiaService.update(this.materia).subscribe(
        () => this.onSaveSuccess(),
        () => this.onSaveError()
      );
    } else {
      this.materiaService.create(this.materia).subscribe(
        () => this.onSaveSuccess(),
        () => this.onSaveError()
      );
    }
  }

  private updateForm(materia: Materia): void {
    this.editForm.patchValue({
      idMaterias: materia.idMaterias,
      nombre: materia.nombre,
      inicioInscripcion: materia.inicioInscripcion,
      finInscripcion: materia.finInscripcion,
      idCarreras: materia.CarrerasIdCarreras,
      idPlan: materia.planIdPlan,
      idFormaAprobacion: materia.formaAprobacionIdformaAprobacion,
    });
  }

  private updateMateria(materia: Materia): void {
    materia.nombre = this.editForm.get(['nombre'])!.value;
    materia.inicioInscripcion = this.editForm.get(['inicioInscripcion'])!.value;
    materia.finInscripcion = this.editForm.get(['finInscripcion'])!.value;
    materia.CarrerasIdCarreras = this.editForm.get(['idCarreras'])!.value;
    materia.planIdPlan = this.editForm.get(['idPlan'])!.value;
    materia.formaAprobacionIdformaAprobacion = this.editForm.get(['idFormaAprobacion'])!.value;
  }

  private onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  private onSaveError(): void {
    this.isSaving = false;
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Estudiante } from 'app/core/estudiante/estudiante.model';
import { EstudianteService } from 'app/core/estudiante/estudiante.service';

@Component({
  selector: 'jhi-estudiante-mgmt-update',
  templateUrl: './estudiante-management-update.component.html',
})
export class EstudianteManagementUpdateComponent implements OnInit {
  estudiante!: Estudiante;
  authorities: string[] = [];
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    nombre: ['', [Validators.maxLength(50)]],
    apellido: ['', [Validators.maxLength(50)]],
    email: ['', [Validators.minLength(5), Validators.maxLength(254), Validators.email]],
    domicilio: ['', [Validators.maxLength(50)]],
    telefono: ['', [Validators.maxLength(50)]],
  });

  constructor(private estudianteService: EstudianteService, private route: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.route.data.subscribe(({ estudiante }) => {
      if (estudiante) {
        this.estudiante = estudiante;
        if (this.estudiante.id === undefined) {
          this.estudiante.id = 0;
        }
        this.updateForm(estudiante);
      }
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    this.updateEstudiante(this.estudiante);
    if (this.estudiante.id !== undefined) {
      this.estudianteService.update(this.estudiante).subscribe(
        () => this.onSaveSuccess(),
        () => this.onSaveError()
      );
    } else {
      this.estudianteService.create(this.estudiante).subscribe(
        () => this.onSaveSuccess(),
        () => this.onSaveError()
      );
    }
  }

  private updateForm(estudiante: Estudiante): void {
    this.editForm.patchValue({
      id: estudiante.id,
      nombre: estudiante.nombre,
      apellido: estudiante.apellido,
      domicilio: estudiante.domicilio,
      email: estudiante.email,
      telefono: estudiante.telefono,
    });
  }

  private updateEstudiante(estudiante: Estudiante): void {
    estudiante.nombre = this.editForm.get(['nombre'])!.value;
    estudiante.apellido = this.editForm.get(['apellido'])!.value;
    estudiante.domicilio = this.editForm.get(['domicilio'])!.value;
    estudiante.email = this.editForm.get(['email'])!.value;
    estudiante.telefono = this.editForm.get(['telefono'])!.value;
  }

  private onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  private onSaveError(): void {
    this.isSaving = false;
  }
}

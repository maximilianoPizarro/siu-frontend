import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Profesor } from 'app/core/profesor/profesor.model';
import { ProfesorService } from 'app/core/profesor/profesor.service';

@Component({
  selector: 'jhi-profesor-mgmt-update',
  templateUrl: './profesor-management-update.component.html',
})
export class ProfesorManagementUpdateComponent implements OnInit {
  profesor!: Profesor;
  authorities: string[] = [];
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    nombre: ['', [Validators.maxLength(50)]],
    apellido: ['', [Validators.maxLength(50)]],
    titulo: ['', [Validators.maxLength(50)]],
    domicilio: ['', [Validators.maxLength(50)]],
    telefono: ['', [Validators.maxLength(50)]],
  });

  constructor(private profesorService: ProfesorService, private route: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.route.data.subscribe(({ profesor }) => {
      if (profesor) {
        this.profesor = profesor;
        if (this.profesor.id === undefined) {
          this.profesor.id = 0;
        }
        this.updateForm(profesor);
      }
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    this.updateProfesor(this.profesor);
    if (this.profesor.id !== undefined) {
      this.profesorService.update(this.profesor).subscribe(
        () => this.onSaveSuccess(),
        () => this.onSaveError()
      );
    } else {
      this.profesorService.create(this.profesor).subscribe(
        () => this.onSaveSuccess(),
        () => this.onSaveError()
      );
    }
  }

  private updateForm(profesor: Profesor): void {
    this.editForm.patchValue({
      id: profesor.id,
      nombre: profesor.nombre,
      apellido: profesor.apellido,
      domicilio: profesor.domicilio,
      titulo: profesor.titulo,
      telefono: profesor.telefono,
    });
  }

  private updateProfesor(profesor: Profesor): void {
    profesor.nombre = this.editForm.get(['nombre'])!.value;
    profesor.apellido = this.editForm.get(['apellido'])!.value;
    profesor.domicilio = this.editForm.get(['domicilio'])!.value;
    profesor.titulo = this.editForm.get(['titulo'])!.value;
    profesor.telefono = this.editForm.get(['telefono'])!.value;
  }

  private onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  private onSaveError(): void {
    this.isSaving = false;
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Carrera } from 'app/core/carrera/carrera.model';
import { CarreraService } from 'app/core/carrera/carrera.service';

@Component({
  selector: 'jhi-carrera-mgmt-update',
  templateUrl: './carrera-management-update.component.html',
})
export class CarreraManagementUpdateComponent implements OnInit {
  carrera!: Carrera;
  authorities: string[] = [];
  isSaving = false;

  editForm = this.fb.group({
    idCarreras: [],
    nombre: ['', [Validators.maxLength(50)]],
    departamento: ['', [Validators.maxLength(50)]],
  });

  constructor(private carreraService: CarreraService, private route: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.route.data.subscribe(({ carrera }) => {
      if (carrera) {
        this.carrera = carrera;
        if (this.carrera.idCarreras === undefined) {
          this.carrera.idCarreras = 0;
        }
        this.updateForm(carrera);
      }
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    this.updateCarrera(this.carrera);
    if (this.carrera.idCarreras !== undefined) {
      this.carreraService.update(this.carrera).subscribe(
        () => this.onSaveSuccess(),
        () => this.onSaveError()
      );
    } else {
      this.carreraService.create(this.carrera).subscribe(
        () => this.onSaveSuccess(),
        () => this.onSaveError()
      );
    }
  }

  private updateForm(carrera: Carrera): void {
    this.editForm.patchValue({
      id: carrera.idCarreras,
      nombre: carrera.nombre,
      departamento: carrera.departamento,
    });
  }

  private updateCarrera(carrera: Carrera): void {
    carrera.nombre = this.editForm.get(['nombre'])!.value;
    carrera.departamento = this.editForm.get(['departamento'])!.value;
  }

  private onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  private onSaveError(): void {
    this.isSaving = false;
  }
}

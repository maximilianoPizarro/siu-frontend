import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Estudiante, IEstudianteCreate } from 'app/core/estudiante/estudiante.model';
import { EstudianteService } from 'app/core/estudiante/estudiante.service';
import { IUser } from 'app/core/user/user.model';
import { UserService } from 'app/core/user/user.service';

@Component({
  selector: 'jhi-estudiante-mgmt-update',
  templateUrl: './estudiante-management-update.component.html',
})
export class EstudianteManagementUpdateComponent implements OnInit, OnDestroy {
  estudiante!: Estudiante;
  estudianteCreate!: IEstudianteCreate;
  users: IUser[] | null = null;
  usersListSubscription?: any;
  isSaving = false;
  totalItems = 0;

  editForm = this.fb.group({
    id: [],
    nombre: ['', [Validators.maxLength(50)]],
    apellido: ['', [Validators.maxLength(50)]],
    dni: ['', [Validators.maxLength(50)]],
    email: ['', [Validators.minLength(5), Validators.maxLength(254), Validators.email]],
    domicilio: ['', [Validators.maxLength(50)]],
    telefono: ['', [Validators.maxLength(50)]],
    user: [],
  });

  constructor(
    private estudianteService: EstudianteService,
    private userService: UserService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loadAllUsers();
    this.route.data.subscribe(({ estudiante }) => {
      if (estudiante) {
        this.estudiante = estudiante;
        this.updateForm(estudiante);
      }
    });
  }

  ngOnDestroy(): void {
    this.usersListSubscription.unsubscribe();
  }

  private loadAllUsers(): void {
    this.usersListSubscription = this.userService.query().subscribe((res: HttpResponse<IUser[]>) => this.onSuccess(res.body, res.headers));
  }

  private onSuccess(users: IUser[] | null, headers: HttpHeaders): void {
    this.totalItems = Number(headers.get('X-Total-Count'));
    this.users = users;
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
      this.estudianteCreate = this.estudiante;
      this.estudianteService.create(this.estudianteCreate).subscribe(
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
      dni: estudiante.dni,
      domicilio: estudiante.domicilio,
      email: estudiante.email,
      telefono: estudiante.telefono,
      user: estudiante.user,
    });
  }

  private updateEstudiante(estudiante: Estudiante): void {
    estudiante.nombre = this.editForm.get(['nombre'])!.value;
    estudiante.apellido = this.editForm.get(['apellido'])!.value;
    estudiante.dni = this.editForm.get(['dni'])!.value;
    estudiante.domicilio = this.editForm.get(['domicilio'])!.value;
    estudiante.email = this.editForm.get(['email'])!.value;
    estudiante.telefono = this.editForm.get(['telefono'])!.value;
    estudiante.user = this.editForm.get(['user'])!.value[0];
  }

  private onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  private onSaveError(): void {
    this.isSaving = false;
  }
}

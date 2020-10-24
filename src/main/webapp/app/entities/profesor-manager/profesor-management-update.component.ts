import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { IProfesorCreate, Profesor } from 'app/core/profesor/profesor.model';
import { ProfesorService } from 'app/core/profesor/profesor.service';
import { IUser } from 'app/core/user/user.model';
import { UserService } from 'app/core/user/user.service';

@Component({
  selector: 'jhi-profesor-mgmt-update',
  templateUrl: './profesor-management-update.component.html',
})
export class ProfesorManagementUpdateComponent implements OnInit, OnDestroy {
  profesor!: Profesor;
  profesorCreate!: IProfesorCreate;
  users: IUser[] | null = null;
  usersListSubscription?: any;
  isSaving = false;
  totalItems = 0;

  editForm = this.fb.group({
    id: [],
    nombre: ['', [Validators.maxLength(50)]],
    apellido: ['', [Validators.maxLength(50)]],
    dni: ['', [Validators.maxLength(50)]],
    titulo: ['', [Validators.maxLength(50)]],
    domicilio: ['', [Validators.maxLength(50)]],
    telefono: ['', [Validators.maxLength(50)]],
    user: [],
  });

  constructor(
    private profesorService: ProfesorService,
    private userService: UserService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loadAllUsers();
    this.route.data.subscribe(({ profesor }) => {
      if (profesor) {
        this.profesor = profesor;
        this.updateForm(profesor);
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
    this.updateProfesor(this.profesor);
    if (this.profesor.id !== undefined) {
      this.profesorService.update(this.profesor).subscribe(
        () => this.onSaveSuccess(),
        () => this.onSaveError()
      );
    } else {
      this.profesorCreate = this.profesor;
      this.profesorService.create(this.profesorCreate).subscribe(
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
      dni: profesor.dni,
      domicilio: profesor.domicilio,
      titulo: profesor.titulo,
      telefono: profesor.telefono,
      user: profesor.user,
    });
  }

  private updateProfesor(profesor: Profesor): void {
    profesor.nombre = this.editForm.get(['nombre'])!.value;
    profesor.apellido = this.editForm.get(['apellido'])!.value;
    profesor.dni = this.editForm.get(['dni'])!.value;
    profesor.domicilio = this.editForm.get(['domicilio'])!.value;
    profesor.titulo = this.editForm.get(['titulo'])!.value;
    profesor.telefono = this.editForm.get(['telefono'])!.value;
    profesor.user = this.editForm.get(['user'])!.value[0];
  }

  private onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  private onSaveError(): void {
    this.isSaving = false;
  }
}

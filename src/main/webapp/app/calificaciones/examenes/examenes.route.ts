import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Routes } from '@angular/router';
import { Observable, of } from 'rxjs';

import { ExamenesManagementComponent } from './examenes.component';

import { AlumnoMateriasManagementComponent } from './alumnomateria.component';

import { Materia, IMateria } from 'app/core/calificaciones/materia.model';

@Injectable({ providedIn: 'root' })
export class ExamenesManagementResolve implements Resolve<IMateria> {
  constructor() {}

  resolve(route: ActivatedRouteSnapshot): Observable<IMateria> {
    const id = route.params['idMateria'];
    if (id) {
      return of(new Materia(0, id, '', new Date(), new Date(), 0, 0, new Date(), new Date()));
    }
    return of(new Materia());
  }
}

export const examenesManagementRoute: Routes = [
  {
    path: '',
    component: ExamenesManagementComponent,
    data: {
      defaultSort: 'id,asc',
    },
  },
  {
    path: ':idMateria/view',
    component: AlumnoMateriasManagementComponent,
    resolve: {
      materia: ExamenesManagementResolve,
    },
  },
];

import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Routes } from '@angular/router';
import { Observable, of } from 'rxjs';

import { MateriasManagementComponent } from './materias.component';

import { AlumnoMateriasManagementComponent } from './alumnomateria.component';

import { Materia, IMateria } from 'app/core/calificaciones/materia.model';

@Injectable({ providedIn: 'root' })
export class MateriaManagementResolve implements Resolve<IMateria> {
  constructor() {}

  resolve(route: ActivatedRouteSnapshot): Observable<IMateria> {
    const id = route.params['idMateria'];
    if (id) {
      return of(new Materia(0, id, '', new Date(), new Date(), 0, 0, new Date(), new Date()));
    }
    return of(new Materia());
  }
}

export const materiasManagementRoute: Routes = [
  {
    path: '',
    component: MateriasManagementComponent,
    data: {
      defaultSort: 'id,asc',
    },
  },
  {
    path: ':idMateria/view',
    component: AlumnoMateriasManagementComponent,
    resolve: {
      materia: MateriaManagementResolve,
    },
  },
];

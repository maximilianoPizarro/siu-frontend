import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Routes } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Materia, IMateria } from 'app/core/materia/materia.model';
import { MateriaService } from 'app/core/materia/materia.service';
import { MateriaManagementComponent } from './materia-management.component';
import { MateriaManagementDetailComponent } from './materia-management-detail.component';
import { MateriaManagementUpdateComponent } from './materia-management-update.component';

@Injectable({ providedIn: 'root' })
export class MateriaManagementResolve implements Resolve<IMateria> {
  constructor(private service: MateriaService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IMateria> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id);
    }
    return of(new Materia());
  }
}

export const materiaManagementRoute: Routes = [
  {
    path: '',
    component: MateriaManagementComponent,
    data: {
      defaultSort: 'id,asc',
    },
  },
  {
    path: ':id/view',
    component: MateriaManagementDetailComponent,
    resolve: {
      materia: MateriaManagementResolve,
    },
  },
  {
    path: 'new',
    component: MateriaManagementUpdateComponent,
    resolve: {
      materia: MateriaManagementResolve,
    },
  },
  {
    path: ':id/edit',
    component: MateriaManagementUpdateComponent,
    resolve: {
      materia: MateriaManagementResolve,
    },
  },
];

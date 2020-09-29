import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Routes } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Profesor, IProfesor } from 'app/core/profesor/profesor.model';
import { ProfesorService } from 'app/core/profesor/profesor.service';
import { ProfesorManagementComponent } from './profesor-management.component';
import { ProfesorManagementDetailComponent } from './profesor-management-detail.component';
import { ProfesorManagementUpdateComponent } from './profesor-management-update.component';

@Injectable({ providedIn: 'root' })
export class ProfesorManagementResolve implements Resolve<IProfesor> {
  constructor(private service: ProfesorService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IProfesor> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id);
    }
    return of(new Profesor());
  }
}

export const profesorManagementRoute: Routes = [
  {
    path: '',
    component: ProfesorManagementComponent,
    data: {
      defaultSort: 'id,asc',
    },
  },
  {
    path: ':id/view',
    component: ProfesorManagementDetailComponent,
    resolve: {
      profesor: ProfesorManagementResolve,
    },
  },
  {
    path: 'new',
    component: ProfesorManagementUpdateComponent,
    resolve: {
      profesor: ProfesorManagementResolve,
    },
  },
  {
    path: ':id/edit',
    component: ProfesorManagementUpdateComponent,
    resolve: {
      profesor: ProfesorManagementResolve,
    },
  },
];

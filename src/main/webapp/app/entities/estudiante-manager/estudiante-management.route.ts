import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Routes } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Estudiante, IEstudiante } from 'app/core/estudiante/estudiante.model';
import { EstudianteService } from 'app/core/estudiante/estudiante.service';
import { EstudianteManagementComponent } from './estudiante-management.component';
import { EstudianteManagementDetailComponent } from './estudiante-management-detail.component';
import { EstudianteManagementUpdateComponent } from './estudiante-management-update.component';

@Injectable({ providedIn: 'root' })
export class EstudianteManagementResolve implements Resolve<IEstudiante> {
  constructor(private service: EstudianteService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IEstudiante> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id);
    }
    return of(new Estudiante());
  }
}

export const estudianteManagementRoute: Routes = [
  {
    path: '',
    component: EstudianteManagementComponent,
    data: {
      defaultSort: 'id,asc',
    },
  },
  {
    path: ':id/view',
    component: EstudianteManagementDetailComponent,
    resolve: {
      estudiante: EstudianteManagementResolve,
    },
  },
  {
    path: 'new',
    component: EstudianteManagementUpdateComponent,
    resolve: {
      estudiante: EstudianteManagementResolve,
    },
  },
  {
    path: ':id/edit',
    component: EstudianteManagementUpdateComponent,
    resolve: {
      estudiante: EstudianteManagementResolve,
    },
  },
];

import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Routes } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Examen, IExamen } from 'app/core/examen/examen.model';
import { ExamenService } from 'app/core/examen/examen.service';
import { ExamenManagementComponent } from './examen-management.component';
import { ExamenManagementDetailComponent } from './examen-management-detail.component';
import { ExamenManagementUpdateComponent } from './examen-management-update.component';

@Injectable({ providedIn: 'root' })
export class ExamenManagementResolve implements Resolve<IExamen> {
  constructor(private service: ExamenService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IExamen> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id);
    }
    return of(new Examen());
  }
}

export const examenManagementRoute: Routes = [
  {
    path: '',
    component: ExamenManagementComponent,
    data: {
      defaultSort: 'id,asc',
    },
  },
  {
    path: ':id/view',
    component: ExamenManagementDetailComponent,
    resolve: {
      examen: ExamenManagementResolve,
    },
  },
  {
    path: 'new',
    component: ExamenManagementUpdateComponent,
    resolve: {
      examen: ExamenManagementResolve,
    },
  },
  {
    path: ':id/edit',
    component: ExamenManagementUpdateComponent,
    resolve: {
      examen: ExamenManagementResolve,
    },
  },
];

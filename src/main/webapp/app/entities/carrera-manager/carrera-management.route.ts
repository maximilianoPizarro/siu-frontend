import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Routes } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Carrera, ICarrera } from 'app/core/carrera/carrera.model';
import { CarreraService } from 'app/core/carrera/carrera.service';
import { CarreraManagementComponent } from './carrera-management.component';
import { CarreraManagementDetailComponent } from './carrera-management-detail.component';
import { CarreraManagementUpdateComponent } from './carrera-management-update.component';

@Injectable({ providedIn: 'root' })
export class CarreraManagementResolve implements Resolve<ICarrera> {
  constructor(private service: CarreraService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ICarrera> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id);
    }
    return of(new Carrera());
  }
}

export const carreraManagementRoute: Routes = [
  {
    path: '',
    component: CarreraManagementComponent,
    data: {
      defaultSort: 'id,asc',
    },
  },
  {
    path: ':id/view',
    component: CarreraManagementDetailComponent,
    resolve: {
      carrera: CarreraManagementResolve,
    },
  },
  {
    path: 'new',
    component: CarreraManagementUpdateComponent,
    resolve: {
      carrera: CarreraManagementResolve,
    },
  },
  {
    path: ':id/edit',
    component: CarreraManagementUpdateComponent,
    resolve: {
      carrera: CarreraManagementResolve,
    },
  },
];

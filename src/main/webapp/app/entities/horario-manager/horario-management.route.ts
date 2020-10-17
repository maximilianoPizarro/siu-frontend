import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Routes } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Horario, IHorario } from 'app/core/horario/horario.model';
import { HorarioService } from 'app/core/horario/horario.service';
import { HorarioManagementComponent } from './horario-management.component';
import { HorarioManagementDetailComponent } from './horario-management-detail.component';
import { HorarioManagementUpdateComponent } from './horario-management-update.component';

@Injectable({ providedIn: 'root' })
export class HorarioManagementResolve implements Resolve<IHorario> {
  constructor(private service: HorarioService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IHorario> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id);
    }
    return of(new Horario());
  }
}

export const horarioManagementRoute: Routes = [
  {
    path: '',
    component: HorarioManagementComponent,
    data: {
      defaultSort: 'id,asc',
    },
  },
  {
    path: ':id/view',
    component: HorarioManagementDetailComponent,
    resolve: {
      horario: HorarioManagementResolve,
    },
  },
  {
    path: 'new',
    component: HorarioManagementUpdateComponent,
    resolve: {
      horario: HorarioManagementResolve,
    },
  },
  {
    path: ':id/edit',
    component: HorarioManagementUpdateComponent,
    resolve: {
      horario: HorarioManagementResolve,
    },
  },
];

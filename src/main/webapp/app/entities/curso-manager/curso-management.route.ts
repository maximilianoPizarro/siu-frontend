import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Routes } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Curso, ICurso } from 'app/core/curso/curso.model';
import { CursoService } from 'app/core/curso/curso.service';
import { CursoManagementComponent } from './curso-management.component';
import { CursoManagementDetailComponent } from './curso-management-detail.component';
import { CursoManagementUpdateComponent } from './curso-management-update.component';

@Injectable({ providedIn: 'root' })
export class CursoManagementResolve implements Resolve<ICurso> {
  constructor(private service: CursoService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ICurso> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id);
    }
    return of(new Curso());
  }
}

export const cursoManagementRoute: Routes = [
  {
    path: '',
    component: CursoManagementComponent,
    data: {
      defaultSort: 'id,asc',
    },
  },
  {
    path: ':id/view',
    component: CursoManagementDetailComponent,
    resolve: {
      curso: CursoManagementResolve,
    },
  },
  {
    path: 'new',
    component: CursoManagementUpdateComponent,
    resolve: {
      curso: CursoManagementResolve,
    },
  },
  {
    path: ':id/edit',
    component: CursoManagementUpdateComponent,
    resolve: {
      curso: CursoManagementResolve,
    },
  },
];

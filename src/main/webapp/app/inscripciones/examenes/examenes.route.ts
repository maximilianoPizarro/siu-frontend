import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Routes } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Examenes, IExamenes } from 'app/core/inscripciones/examenes.model';

import { ExamenesManagementComponent } from './examenes.component';

export const examenesManagementRoute: Routes = [
  {
    path: '',
    component: ExamenesManagementComponent,
    data: {
      defaultSort: 'id,asc',
    },
  },
];

import { Routes } from '@angular/router';

import { MateriasManagementComponent } from './materias.component';

import { AlumnoMateriasManagementComponent } from './alumnomateria.component';

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
    data: {
      defaultSort: 'id,asc',
    },
  },
];

import { Routes } from '@angular/router';

import { MateriasManagementComponent } from './materias.component';

export const materiasManagementRoute: Routes = [
  {
    path: '',
    component: MateriasManagementComponent,
    data: {
      defaultSort: 'id,asc',
    },
  },
];

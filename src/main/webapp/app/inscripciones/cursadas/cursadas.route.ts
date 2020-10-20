import { Routes } from '@angular/router';

import { CursadasManagementComponent } from './cursadas.component';

export const cursadasManagementRoute: Routes = [
  {
    path: '',
    component: CursadasManagementComponent,
    data: {
      defaultSort: 'id,asc',
    },
  },
];

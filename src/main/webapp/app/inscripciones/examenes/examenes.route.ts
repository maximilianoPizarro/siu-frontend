import { Routes } from '@angular/router';

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

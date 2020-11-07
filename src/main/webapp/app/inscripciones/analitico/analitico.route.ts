import { Routes } from '@angular/router';

import { AnaliticoManagementComponent } from './analitico.component';

export const analiticoManagementRoute: Routes = [
  {
    path: '',
    component: AnaliticoManagementComponent,
    data: {
      defaultSort: 'id,asc',
    },
  },
];

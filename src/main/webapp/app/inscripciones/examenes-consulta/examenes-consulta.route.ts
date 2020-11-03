import { Routes } from '@angular/router';

import { ExamenesConsultaManagementComponent } from './examenes-consulta.component';

export const examenesConsultaManagementRoute: Routes = [
  {
    path: '',
    component: ExamenesConsultaManagementComponent,
    data: {
      defaultSort: 'id,asc',
    },
  },
];

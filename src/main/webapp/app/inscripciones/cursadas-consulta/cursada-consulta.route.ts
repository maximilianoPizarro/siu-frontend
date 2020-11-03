import { Routes } from '@angular/router';

import { CursadaConsultaManagementComponent } from './cursada-consulta.component';

export const cursadaConsultaManagementRoute: Routes = [
  {
    path: '',
    component: CursadaConsultaManagementComponent,
    data: {
      defaultSort: 'id,asc',
    },
  },
];

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Authority } from 'app/shared/constants/authority.constants';

@NgModule({
  imports: [
    RouterModule.forChild([
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
      {
        path: 'cursadas',
        loadChildren: () => import('./cursadas/cursadas.module').then(m => m.CursadasManagementModule),
        data: {
          pageTitle: 'cursadas',
          authorities: [Authority.ADMIN],
        },
      },
      {
        path: 'examenes',
        loadChildren: () => import('./examenes/examenes.module').then(m => m.ExamenesManagementModule),
        data: {
          pageTitle: 'examenes',
          authorities: [Authority.ADMIN],
        },
      },
    ]),
  ],
})
export class UnLaSiuInscripcionesModule {}

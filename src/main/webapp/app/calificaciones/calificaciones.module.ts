import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Authority } from 'app/shared/constants/authority.constants';

@NgModule({
  imports: [
    RouterModule.forChild([
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
      {
        path: 'materias',
        loadChildren: () => import('./materias/materias.module').then(m => m.MateriasManagementModule),
        data: {
          pageTitle: 'materias',
          authorities: [Authority.ADMIN, Authority.PROFESOR],
        },
      },
    ]),
  ],
})
export class UnLaSiuCalificacionesModule {}

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Authority } from 'app/shared/constants/authority.constants';

@NgModule({
  imports: [
    RouterModule.forChild([
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
      {
        path: 'estudiante-manager',
        loadChildren: () => import('./estudiante-manager/estudiante-management.module').then(m => m.EstudianteManagementModule),
        data: {
          pageTitle: 'Estudiantes',
          authorities: [Authority.ADMIN],
        },
      },
    ]),
  ],
})
export class UnLaSiuEntityModule {}

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
          pageTitle: 'estudiantes',
          authorities: [Authority.ADMIN],
        },
      },
      {
        path: 'profesor-manager',
        loadChildren: () => import('./profesor-manager/profesor-management.module').then(m => m.ProfesorManagementModule),
        data: {
          pageTitle: 'profesores',
          authorities: [Authority.ADMIN],
        },
      },
      {
        path: 'carrera-manager',
        loadChildren: () => import('./carrera-manager/carrera-management.module').then(m => m.CarreraManagementModule),
        data: {
          pageTitle: 'carreras',
          authorities: [Authority.ADMIN],
        },
      },
    ]),
  ],
})
export class UnLaSiuEntityModule {}

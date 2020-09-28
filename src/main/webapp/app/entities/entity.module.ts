import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
      {
        path: 'estudiante',
        loadChildren: () => import('./estudiante-manager/estudiante-management.module').then(m => m.EstudianteManagementModule),
        data: {
          pageTitle: 'Estudiantes',
        },
      },
    ]),
  ],
})
export class UnLaSiuEntityModule {}

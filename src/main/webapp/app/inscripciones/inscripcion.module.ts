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
          authorities: [Authority.ADMIN, Authority.ESTUDIANTE],
        },
      },
      {
        path: 'examenes-consulta',
        loadChildren: () => import('./examenes-consulta/examenes-consulta.module').then(m => m.ExamenesConsultaManagementModule),
        data: {
          pageTitle: 'consulta examenes',
          authorities: [Authority.ADMIN, Authority.ESTUDIANTE],
        },
      },
      {
        path: 'cursada-consulta',
        loadChildren: () => import('./cursadas-consulta/cursada-consulta.module').then(m => m.CursadaConsultaManagementModule),
        data: {
          pageTitle: 'cursada examenes',
          authorities: [Authority.ADMIN, Authority.ESTUDIANTE],
        },
      },
      {
        path: 'examenes',
        loadChildren: () => import('./examenes/examenes.module').then(m => m.ExamenesManagementModule),
        data: {
          pageTitle: 'examenes',
          authorities: [Authority.ADMIN, Authority.ESTUDIANTE],
        },
      },
      {
        path: 'analitico',
        loadChildren: () => import('./analitico/analitico.module').then(m => m.AnaliticoManagementModule),
        data: {
          pageTitle: 'analitico',
          authorities: [Authority.ADMIN, Authority.ESTUDIANTE],
        },
      },
    ]),
  ],
})
export class UnLaSiuInscripcionesModule {}

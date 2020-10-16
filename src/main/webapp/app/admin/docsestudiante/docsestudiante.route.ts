import { Route } from '@angular/router';

import { DocsEstudianteComponent } from './docsestudiante.component';

export const docsRoute: Route = {
  path: '',
  component: DocsEstudianteComponent,
  data: {
    pageTitle: 'API Estudiantes',
  },
};

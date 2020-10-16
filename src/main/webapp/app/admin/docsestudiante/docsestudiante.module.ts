import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UnLaSiuSharedModule } from 'app/shared/shared.module';

import { DocsEstudianteComponent } from './docsestudiante.component';

import { docsRoute } from './docsestudiante.route';

@NgModule({
  imports: [UnLaSiuSharedModule, RouterModule.forChild([docsRoute])],
  declarations: [DocsEstudianteComponent],
})
export class DocsEstudianteModule {}

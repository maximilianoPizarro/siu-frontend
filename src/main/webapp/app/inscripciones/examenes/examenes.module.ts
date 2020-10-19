import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UnLaSiuSharedModule } from 'app/shared/shared.module';
import { UnLaSiuInscripcionesModule } from '../inscripcion.module';
import { ExamenesManagementComponent } from './examenes.component';
import { examenesManagementRoute } from './examenes.route';

@NgModule({
  imports: [UnLaSiuInscripcionesModule, UnLaSiuSharedModule, RouterModule.forChild(examenesManagementRoute)],
  declarations: [ExamenesManagementComponent],
  entryComponents: [],
})
export class ExamenesManagementModule {}

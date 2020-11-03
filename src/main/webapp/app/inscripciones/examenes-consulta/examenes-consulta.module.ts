import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UnLaSiuSharedModule } from 'app/shared/shared.module';
import { ExamenesConsultaManagementComponent } from './examenes-consulta.component';
import { examenesConsultaManagementRoute } from './examenes-consulta.route';

@NgModule({
  imports: [UnLaSiuSharedModule, RouterModule.forChild(examenesConsultaManagementRoute)],
  declarations: [ExamenesConsultaManagementComponent],
  entryComponents: [],
})
export class ExamenesConsultaManagementModule {}

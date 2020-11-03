import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UnLaSiuSharedModule } from 'app/shared/shared.module';
import { ExamenesConsultaManagementComponent } from './examenes-consulta.component';
import { ExamenesCancelarComponent } from './examenes-cancelar.component';
import { examenesConsultaManagementRoute } from './examenes-consulta.route';

@NgModule({
  imports: [UnLaSiuSharedModule, RouterModule.forChild(examenesConsultaManagementRoute)],
  declarations: [ExamenesConsultaManagementComponent, ExamenesCancelarComponent],
  entryComponents: [ExamenesCancelarComponent],
})
export class ExamenesConsultaManagementModule {}

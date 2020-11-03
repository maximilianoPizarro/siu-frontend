import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UnLaSiuSharedModule } from 'app/shared/shared.module';
import { CursadaConsultaManagementComponent } from './cursada-consulta.component';
import { cursadaConsultaManagementRoute } from './cursada-consulta.route';

@NgModule({
  imports: [UnLaSiuSharedModule, RouterModule.forChild(cursadaConsultaManagementRoute)],
  declarations: [CursadaConsultaManagementComponent],
  entryComponents: [],
})
export class CursadaConsultaManagementModule {}

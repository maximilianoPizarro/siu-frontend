import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UnLaSiuSharedModule } from 'app/shared/shared.module';
import { CursadaConsultaManagementComponent } from './cursada-consulta.component';
import { CursadaCancelarComponent } from './cursada-cancelar.component';
import { cursadaConsultaManagementRoute } from './cursada-consulta.route';

@NgModule({
  imports: [UnLaSiuSharedModule, RouterModule.forChild(cursadaConsultaManagementRoute)],
  declarations: [CursadaConsultaManagementComponent, CursadaCancelarComponent],
  entryComponents: [CursadaCancelarComponent],
})
export class CursadaConsultaManagementModule {}

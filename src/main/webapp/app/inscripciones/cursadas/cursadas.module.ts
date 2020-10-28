import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UnLaSiuSharedModule } from 'app/shared/shared.module';
import { CursadasManagementComponent } from './cursadas.component';
import { CursadaIncripcionComponent } from './cursada-incripcion.component';
import { cursadasManagementRoute } from './cursadas.route';

@NgModule({
  imports: [UnLaSiuSharedModule, RouterModule.forChild(cursadasManagementRoute)],
  declarations: [CursadasManagementComponent, CursadaIncripcionComponent],
  entryComponents: [CursadaIncripcionComponent],
})
export class CursadasManagementModule {}

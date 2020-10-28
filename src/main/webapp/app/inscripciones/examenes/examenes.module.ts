import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UnLaSiuSharedModule } from 'app/shared/shared.module';
import { ExamenesManagementComponent } from './examenes.component';
import { ExamenesIncripcionComponent } from './examenes-incripcion.component';
import { examenesManagementRoute } from './examenes.route';

@NgModule({
  imports: [UnLaSiuSharedModule, RouterModule.forChild(examenesManagementRoute)],
  declarations: [ExamenesManagementComponent, ExamenesIncripcionComponent],
  entryComponents: [ExamenesIncripcionComponent],
})
export class ExamenesManagementModule {}

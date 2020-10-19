import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExamenesManagementComponent } from './examenes.component';
import { examenesManagementRoute } from './examenes.route';
import { UnLaSiuSharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [UnLaSiuSharedModule, RouterModule.forChild(examenesManagementRoute)],
  declarations: [ExamenesManagementComponent],
  entryComponents: [],
})
export class ExamenesManagementModule {}

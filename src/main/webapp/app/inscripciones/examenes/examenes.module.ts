import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UnLaSiuSharedModule } from 'app/shared/shared.module';
import { ExamenesManagementComponent } from './examenes.component';
import { examenesManagementRoute } from './examenes.route';

@NgModule({
  imports: [UnLaSiuSharedModule, RouterModule.forChild(examenesManagementRoute)],
  declarations: [ExamenesManagementComponent],
  entryComponents: [],
})
export class ExamenesManagementModule {}

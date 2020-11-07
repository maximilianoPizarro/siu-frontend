import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UnLaSiuSharedModule } from 'app/shared/shared.module';
import { AnaliticoManagementComponent } from './analitico.component';
import { analiticoManagementRoute } from './analitico.route';

@NgModule({
  imports: [UnLaSiuSharedModule, RouterModule.forChild(analiticoManagementRoute)],
  declarations: [AnaliticoManagementComponent],
  entryComponents: [],
})
export class AnaliticoManagementModule {}

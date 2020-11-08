import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UnLaSiuSharedModule } from 'app/shared/shared.module';
import { AnaliticoManagementComponent } from './analitico.component';
import { analiticoManagementRoute } from './analitico.route';
import { ExportAsModule } from 'ngx-export-as';

@NgModule({
  imports: [UnLaSiuSharedModule, ExportAsModule, RouterModule.forChild(analiticoManagementRoute)],
  declarations: [AnaliticoManagementComponent],
  entryComponents: [],
})
export class AnaliticoManagementModule {}

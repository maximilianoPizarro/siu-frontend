import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UnLaSiuSharedModule } from 'app/shared/shared.module';
import { HorarioManagementComponent } from './horario-management.component';
import { HorarioManagementDetailComponent } from './horario-management-detail.component';
import { HorarioManagementUpdateComponent } from './horario-management-update.component';
import { HorarioManagementDeleteDialogComponent } from './horario-management-delete-dialog.component';
import { horarioManagementRoute } from './horario-management.route';

@NgModule({
  imports: [UnLaSiuSharedModule, RouterModule.forChild(horarioManagementRoute)],
  declarations: [
    HorarioManagementComponent,
    HorarioManagementDetailComponent,
    HorarioManagementUpdateComponent,
    HorarioManagementDeleteDialogComponent,
  ],
  entryComponents: [HorarioManagementDeleteDialogComponent],
})
export class HorarioManagementModule {}

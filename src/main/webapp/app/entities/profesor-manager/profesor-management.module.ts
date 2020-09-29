import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UnLaSiuSharedModule } from 'app/shared/shared.module';
import { ProfesorManagementComponent } from './profesor-management.component';
import { ProfesorManagementDetailComponent } from './profesor-management-detail.component';
import { ProfesorManagementUpdateComponent } from './profesor-management-update.component';
import { ProfesorManagementDeleteDialogComponent } from './profesor-management-delete-dialog.component';
import { profesorManagementRoute } from './profesor-management.route';

@NgModule({
  imports: [UnLaSiuSharedModule, RouterModule.forChild(profesorManagementRoute)],
  declarations: [
    ProfesorManagementComponent,
    ProfesorManagementDetailComponent,
    ProfesorManagementUpdateComponent,
    ProfesorManagementDeleteDialogComponent,
  ],
  entryComponents: [ProfesorManagementDeleteDialogComponent],
})
export class ProfesorManagementModule {}

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UnLaSiuSharedModule } from 'app/shared/shared.module';
import { ExamenManagementComponent } from './examen-management.component';
import { ExamenManagementDetailComponent } from './examen-management-detail.component';
import { ExamenManagementUpdateComponent } from './examen-management-update.component';
import { ExamenManagementDeleteDialogComponent } from './examen-management-delete-dialog.component';
import { examenManagementRoute } from './examen-management.route';

@NgModule({
  imports: [UnLaSiuSharedModule, RouterModule.forChild(examenManagementRoute)],
  declarations: [
    ExamenManagementComponent,
    ExamenManagementDetailComponent,
    ExamenManagementUpdateComponent,
    ExamenManagementDeleteDialogComponent,
  ],
  entryComponents: [ExamenManagementDeleteDialogComponent],
})
export class ExamenManagementModule {}

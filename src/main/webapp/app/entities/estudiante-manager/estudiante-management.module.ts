import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UnLaSiuSharedModule } from 'app/shared/shared.module';
import { EstudianteManagementComponent } from './estudiante-management.component';
import { EstudianteManagementDetailComponent } from './estudiante-management-detail.component';
import { EstudianteManagementUpdateComponent } from './estudiante-management-update.component';
import { EstudianteManagementDeleteDialogComponent } from './estudiante-management-delete-dialog.component';
import { estudianteManagementRoute } from './estudiante-management.route';

@NgModule({
  imports: [UnLaSiuSharedModule, RouterModule.forChild(estudianteManagementRoute)],
  declarations: [
    EstudianteManagementComponent,
    EstudianteManagementDetailComponent,
    EstudianteManagementUpdateComponent,
    EstudianteManagementDeleteDialogComponent,
  ],
  entryComponents: [EstudianteManagementDeleteDialogComponent],
})
export class EstudianteManagementModule {}

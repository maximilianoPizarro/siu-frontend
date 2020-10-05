import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UnLaSiuSharedModule } from 'app/shared/shared.module';
import { MateriaManagementComponent } from './materia-management.component';
import { MateriaManagementDetailComponent } from './materia-management-detail.component';
import { MateriaManagementUpdateComponent } from './materia-management-update.component';
import { MateriaManagementDeleteDialogComponent } from './materia-management-delete-dialog.component';
import { materiaManagementRoute } from './materia-management.route';

@NgModule({
  imports: [UnLaSiuSharedModule, RouterModule.forChild(materiaManagementRoute)],
  declarations: [
    MateriaManagementComponent,
    MateriaManagementDetailComponent,
    MateriaManagementUpdateComponent,
    MateriaManagementDeleteDialogComponent,
  ],
  entryComponents: [MateriaManagementDeleteDialogComponent],
})
export class MateriaManagementModule {}

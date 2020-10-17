import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UnLaSiuSharedModule } from 'app/shared/shared.module';
import { CursoManagementComponent } from './curso-management.component';
import { CursoManagementDetailComponent } from './curso-management-detail.component';
import { CursoManagementUpdateComponent } from './curso-management-update.component';
import { CursoManagementDeleteDialogComponent } from './curso-management-delete-dialog.component';
import { cursoManagementRoute } from './curso-management.route';

@NgModule({
  imports: [UnLaSiuSharedModule, RouterModule.forChild(cursoManagementRoute)],
  declarations: [
    CursoManagementComponent,
    CursoManagementDetailComponent,
    CursoManagementUpdateComponent,
    CursoManagementDeleteDialogComponent,
  ],
  entryComponents: [CursoManagementDeleteDialogComponent],
})
export class CursoManagementModule {}

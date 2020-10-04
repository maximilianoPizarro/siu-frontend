import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UnLaSiuSharedModule } from 'app/shared/shared.module';
import { CarreraManagementComponent } from './carrera-management.component';
import { CarreraManagementDetailComponent } from './carrera-management-detail.component';
import { CarreraManagementUpdateComponent } from './carrera-management-update.component';
import { CarreraManagementDeleteDialogComponent } from './carrera-management-delete-dialog.component';
import { carreraManagementRoute } from './carrera-management.route';

@NgModule({
  imports: [UnLaSiuSharedModule, RouterModule.forChild(carreraManagementRoute)],
  declarations: [
    CarreraManagementComponent,
    CarreraManagementDetailComponent,
    CarreraManagementUpdateComponent,
    CarreraManagementDeleteDialogComponent,
  ],
  entryComponents: [CarreraManagementDeleteDialogComponent],
})
export class CarreraManagementModule {}

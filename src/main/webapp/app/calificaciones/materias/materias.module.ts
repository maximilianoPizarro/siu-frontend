import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UnLaSiuSharedModule } from 'app/shared/shared.module';
import { MateriasManagementComponent } from './materias.component';
import { materiasManagementRoute } from './materias.route';

@NgModule({
  imports: [UnLaSiuSharedModule, RouterModule.forChild(materiasManagementRoute)],
  declarations: [MateriasManagementComponent],
  entryComponents: [],
})
export class MateriasManagementModule {}

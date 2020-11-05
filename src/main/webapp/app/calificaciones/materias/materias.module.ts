import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UnLaSiuSharedModule } from 'app/shared/shared.module';
import { MateriasManagementComponent } from './materias.component';
import { AlumnoMateriasManagementComponent } from './alumnomateria.component';
import { materiasManagementRoute } from './materias.route';

@NgModule({
  imports: [UnLaSiuSharedModule, RouterModule.forChild(materiasManagementRoute)],
  declarations: [MateriasManagementComponent, AlumnoMateriasManagementComponent],
  entryComponents: [],
})
export class MateriasManagementModule {}

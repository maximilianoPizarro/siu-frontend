import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UnLaSiuSharedModule } from 'app/shared/shared.module';
import { MateriasManagementComponent } from './materias.component';
import { AlumnoMateriasManagementComponent } from './alumnomateria.component';
import { materiasManagementRoute } from './materias.route';
import { ExportAsModule } from 'ngx-export-as';

@NgModule({
  imports: [UnLaSiuSharedModule, ExportAsModule, RouterModule.forChild(materiasManagementRoute)],
  declarations: [MateriasManagementComponent, AlumnoMateriasManagementComponent],
  entryComponents: [],
})
export class MateriasManagementModule {}

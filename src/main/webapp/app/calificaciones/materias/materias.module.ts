import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UnLaSiuSharedModule } from 'app/shared/shared.module';
import { MateriasManagementComponent } from './materias.component';
import { CalificarComponent } from './calificar.component';
import { AlumnoMateriasManagementComponent } from './alumnomateria.component';
import { materiasManagementRoute } from './materias.route';
import { ExportAsModule } from 'ngx-export-as';

@NgModule({
  imports: [UnLaSiuSharedModule, ExportAsModule, RouterModule.forChild(materiasManagementRoute)],
  declarations: [MateriasManagementComponent, AlumnoMateriasManagementComponent, CalificarComponent],
  entryComponents: [CalificarComponent],
})
export class MateriasManagementModule {}

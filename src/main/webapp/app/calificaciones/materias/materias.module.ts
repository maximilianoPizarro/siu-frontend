import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UnLaSiuSharedModule } from 'app/shared/shared.module';
import { MateriasManagementComponent } from './materias.component';
import { CalificarComponent } from './calificar.component';
import { AlumnoMateriasManagementComponent } from './alumnomateria.component';
import { materiasManagementRoute } from './materias.route';
import { ExportAsModule } from 'ngx-export-as';
import { CalificarExcelComponent } from './calificar-cursada-excel.component';

@NgModule({
  imports: [UnLaSiuSharedModule, ExportAsModule, RouterModule.forChild(materiasManagementRoute)],
  declarations: [MateriasManagementComponent, AlumnoMateriasManagementComponent, CalificarComponent, CalificarExcelComponent],
  entryComponents: [CalificarComponent, CalificarExcelComponent],
})
export class MateriasManagementModule {}

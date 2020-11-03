import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { InscripcionesService } from 'app/core/inscripciones/inscripciones.service';
import { IExamenConsulta } from 'app/core/inscripciones/examenconsulta.model';

@Component({
  selector: 'jhi-examenes-cancelar-mgmt',
  templateUrl: './examenes-cancelar.component.html',
})
export class ExamenesCancelarComponent {
  examen?: IExamenConsulta;

  constructor(private cursadaService: InscripcionesService, public activeModal: NgbActiveModal) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmCancelarInscripcion(examenes: IExamenConsulta): void {
    this.cursadaService.bajaInscripcionExamen(examenes?.idInscriptosExamen).subscribe(() => {
      this.activeModal.close();
    });
  }
}

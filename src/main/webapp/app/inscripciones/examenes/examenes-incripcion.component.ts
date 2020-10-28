import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { InscripcionesService } from 'app/core/inscripciones/inscripciones.service';
import { IExamenIncripcion } from 'app/core/inscripciones/exameninscripcion.model';

@Component({
  selector: 'jhi-examenes-incripcion-mgmt',
  templateUrl: './examenes-incripcion.component.html',
})
export class ExamenesIncripcionComponent {
  examen?: IExamenIncripcion;

  constructor(private cursadaService: InscripcionesService, public activeModal: NgbActiveModal) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmInscripcion(examenes: IExamenIncripcion): void {
    this.cursadaService.inscribirEstudianteExamen(examenes).subscribe(() => {
      this.activeModal.close();
    });
  }
}

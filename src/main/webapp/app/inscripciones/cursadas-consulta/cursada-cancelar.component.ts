import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { InscripcionesService } from 'app/core/inscripciones/inscripciones.service';
import { ICursadaConsulta } from 'app/core/inscripciones/cursadaconsulta.model';

@Component({
  selector: 'jhi-cursada-cancelar-mgmt',
  templateUrl: './cursada-cancelar.component.html',
})
export class CursadaCancelarComponent {
  examen?: ICursadaConsulta;

  constructor(private cursadaService: InscripcionesService, public activeModal: NgbActiveModal) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmCancelarInscripcion(examenes: ICursadaConsulta): void {
    this.cursadaService.bajaInscripcionMateria(examenes?.idalumnosCursada).subscribe(() => {
      this.activeModal.close();
    });
  }
}

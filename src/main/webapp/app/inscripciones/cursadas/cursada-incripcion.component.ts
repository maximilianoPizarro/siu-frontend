import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { InscripcionesService } from 'app/core/inscripciones/inscripciones.service';
import { ICursadaIncripcion } from 'app/core/inscripciones/cursadainscripcion.model';

@Component({
  selector: 'jhi-cursada-incripcion-mgmt',
  templateUrl: './cursada-incripcion.component.html',
})
export class CursadaIncripcionComponent {
  materia?: ICursadaIncripcion;

  constructor(private cursadaService: InscripcionesService, public activeModal: NgbActiveModal) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmInscripcion(cursadas: ICursadaIncripcion): void {
    this.cursadaService.inscribirEstudianteCursada(cursadas).subscribe(() => {
      this.activeModal.close();
    });
  }
}

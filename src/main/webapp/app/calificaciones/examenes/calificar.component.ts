import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CalificarExamen } from 'app/core/calificaciones/calificacionexamen.model';
import { CalificacionesService } from 'app/core/calificaciones/calificaciones.service';
import { IMateriaAlumno } from 'app/core/calificaciones/materiaalumno';
import { Subscription } from 'rxjs';
import { Account } from 'app/core/user/account.model';

@Component({
  selector: 'jhi-calificar-mgmt',
  templateUrl: './calificar.component.html',
})
export class CalificarComponent {
  examen!: IMateriaAlumno;
  currentAccount!: Account;
  authSubscription?: Subscription;

  calificarForm = this.fb.group({
    notaCursada: [],
  });

  constructor(
    private calicarService: CalificacionesService,
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {}

  private updateForm(examen: IMateriaAlumno): void {
    this.calificarForm.patchValue({
      notaCursada: examen.notaCursada,
    });
  }

  private updateCalificar(examen: IMateriaAlumno): void {
    examen.notaCursada = this.calificarForm.get(['notaCursada'])!.value;
  }

  cancel(): void {
    this.activeModal.dismiss();
  }

  save(examen: IMateriaAlumno): void {
    this.updateCalificar(examen);
    this.calicarService
      .cargaNotasFinales(
        new CalificarExamen(
          this.currentAccount?.id,
          examen.materiasIdMaterias,
          examen.idalumnosCursada,
          examen.materiasIdMaterias,
          examen.notaCursada,
          1
        )
      )
      .subscribe(() => {
        this.activeModal.close();
      });
  }

  calificarCursada(examen: IMateriaAlumno, currentAccount: Account): void {
    this.updateForm(examen);
    this.currentAccount = currentAccount;
  }
}

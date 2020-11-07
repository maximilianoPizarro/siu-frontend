import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CalificarExamen } from 'app/core/calificaciones/calificacionexamen.model';
import { CalificacionesService } from 'app/core/calificaciones/calificaciones.service';
import { IMateriaAlumnoExamen } from 'app/core/calificaciones/materiaalumnoexamen';
import { Subscription } from 'rxjs';
import { Account } from 'app/core/user/account.model';

@Component({
  selector: 'jhi-calificar-mgmt',
  templateUrl: './calificar.component.html',
})
export class CalificarComponent {
  examen!: IMateriaAlumnoExamen;
  currentAccount!: Account;
  authSubscription?: Subscription;

  calificarForm = this.fb.group({
    nota: [],
  });

  constructor(
    private calicarService: CalificacionesService,
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {}

  private updateForm(examen: IMateriaAlumnoExamen): void {
    this.calificarForm.patchValue({
      nota: examen.nota,
    });
  }

  private updateCalificar(examen: IMateriaAlumnoExamen): void {
    examen.nota = this.calificarForm.get(['nota'])!.value;
  }

  cancel(): void {
    this.activeModal.dismiss();
  }

  save(examen: IMateriaAlumnoExamen): void {
    this.updateCalificar(examen);
    this.calicarService
      .cargaNotasFinales(
        new CalificarExamen(
          this.currentAccount?.id,
          examen.materiasIdMaterias,
          examen.examenesidExamenes,
          examen.idInscriptosExamen,
          examen.recordatorio,
          examen.nota,
          1
        )
      )
      .subscribe(() => {
        this.activeModal.close();
      });
  }

  calificarCursada(examen: IMateriaAlumnoExamen, currentAccount: Account): void {
    this.updateForm(examen);
    this.currentAccount = currentAccount;
  }
}

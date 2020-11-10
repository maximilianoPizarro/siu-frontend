import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CalificacionesService } from 'app/core/calificaciones/calificaciones.service';
import { Materia } from 'app/core/calificaciones/materia.model';
import { Subscription } from 'rxjs';
import { Account } from 'app/core/user/account.model';

@Component({
  selector: 'jhi-calificar-excel.-mgmt',
  templateUrl: './calificar-excel.component.html',
})
export class CalificarExcelComponent {
  materia!: Materia;
  currentAccount!: Account;
  authSubscription?: Subscription;
  file!: File;

  calificarForm = this.fb.group({
    file: [],
  });

  constructor(
    private calicarService: CalificacionesService,
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  selectFile($event: { target: any }): void {
    const inputValue = $event.target;
    this.file = inputValue.files[0];
  }

  save(): void {
    this.calicarService
      .cargaNotasCursadaDesdeArchivo(this.file, this.currentAccount?.id, this.materia?.idMateria, 'final')
      .subscribe(() => {
        this.activeModal.close();
      });
  }

  calificarCursada(materia: Materia, currentAccount: Account): void {
    this.currentAccount = currentAccount;
    this.materia = materia;
  }
}

import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CalificacionesService } from 'app/core/calificaciones/calificaciones.service';
import { Materia } from 'app/core/calificaciones/materia.model';
import { Subscription } from 'rxjs';
import { Account } from 'app/core/user/account.model';

@Component({
  selector: 'jhi-calificar-cursada-excel.-mgmt',
  templateUrl: './calificar-cursada-excel.component.html',
})
export class CalificarExcelComponent {
  materia!: Materia;
  currentAccount!: Account;
  authSubscription?: Subscription;
  file!: File;

  calificarForm = this.fb.group({
    file: [null, Validators.required],
  });

  constructor(
    private calicarService: CalificacionesService,
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {}

  selectFile($event: { target: any }): void {
    const inputValue = $event.target;
    this.file = inputValue.files[0];
  }

  cancel(): void {
    this.activeModal.dismiss();
  }

  save(): void {
    this.calicarService
      .cargaNotasCursadaDesdeArchivo(this.file, this.currentAccount?.id, this.materia?.idMateria, 'cursada')
      .subscribe(() => {
        this.activeModal.close();
      });
  }

  calificarCursada(materia: Materia, currentAccount: Account): void {
    this.currentAccount = currentAccount;
    this.materia = materia;
  }
}

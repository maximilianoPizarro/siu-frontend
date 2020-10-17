import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { Horario } from 'app/core/horario/horario.model';
import { HorarioService } from 'app/core/horario/horario.service';

@Component({
  selector: 'jhi-horario-mgmt-delete-dialog',
  templateUrl: './horario-management-delete-dialog.component.html',
})
export class HorarioManagementDeleteDialogComponent {
  horario?: Horario;

  constructor(private horarioService: HorarioService, public activeModal: NgbActiveModal, private eventManager: JhiEventManager) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: any): void {
    this.horarioService.delete(id).subscribe(() => {
      this.eventManager.broadcast('horarioListModification');
      this.activeModal.close();
    });
  }
}

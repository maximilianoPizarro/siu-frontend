import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { Estudiante } from 'app/core/estudiante/estudiante.model';
import { EstudianteService } from 'app/core/estudiante/estudiante.service';

@Component({
  selector: 'jhi-estudiante-mgmt-delete-dialog',
  templateUrl: './estudiante-management-delete-dialog.component.html',
})
export class EstudianteManagementDeleteDialogComponent {
  estudiante?: Estudiante;

  constructor(private estudianteService: EstudianteService, public activeModal: NgbActiveModal, private eventManager: JhiEventManager) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: any): void {
    this.estudianteService.delete(id).subscribe(() => {
      this.eventManager.broadcast('estudianteListModification');
      this.activeModal.close();
    });
  }
}

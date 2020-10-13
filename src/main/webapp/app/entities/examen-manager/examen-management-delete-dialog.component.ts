import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { Examen } from 'app/core/examen/examen.model';
import { ExamenService } from 'app/core/examen/examen.service';

@Component({
  selector: 'jhi-examen-mgmt-delete-dialog',
  templateUrl: './examen-management-delete-dialog.component.html',
})
export class ExamenManagementDeleteDialogComponent {
  examen?: Examen;

  constructor(private examenService: ExamenService, public activeModal: NgbActiveModal, private eventManager: JhiEventManager) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: any): void {
    this.examenService.delete(id).subscribe(() => {
      this.eventManager.broadcast('examenListModification');
      this.activeModal.close();
    });
  }
}

import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { Profesor } from 'app/core/profesor/profesor.model';
import { ProfesorService } from 'app/core/profesor/profesor.service';

@Component({
  selector: 'jhi-profesor-mgmt-delete-dialog',
  templateUrl: './profesor-management-delete-dialog.component.html',
})
export class ProfesorManagementDeleteDialogComponent {
  profesor?: Profesor;

  constructor(private profesorService: ProfesorService, public activeModal: NgbActiveModal, private eventManager: JhiEventManager) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: any): void {
    this.profesorService.delete(id).subscribe(() => {
      this.eventManager.broadcast('profesorListModification');
      this.activeModal.close();
    });
  }
}

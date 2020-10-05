import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { Materia } from 'app/core/materia/materia.model';
import { MateriaService } from 'app/core/materia/materia.service';

@Component({
  selector: 'jhi-materia-mgmt-delete-dialog',
  templateUrl: './materia-management-delete-dialog.component.html',
})
export class MateriaManagementDeleteDialogComponent {
  materia?: Materia;

  constructor(private materiaService: MateriaService, public activeModal: NgbActiveModal, private eventManager: JhiEventManager) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: any): void {
    this.materiaService.delete(id).subscribe(() => {
      this.eventManager.broadcast('materiaListModification');
      this.activeModal.close();
    });
  }
}

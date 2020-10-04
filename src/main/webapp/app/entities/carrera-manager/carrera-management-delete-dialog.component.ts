import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { Carrera } from 'app/core/carrera/carrera.model';
import { CarreraService } from 'app/core/carrera/carrera.service';

@Component({
  selector: 'jhi-carrera-mgmt-delete-dialog',
  templateUrl: './carrera-management-delete-dialog.component.html',
})
export class CarreraManagementDeleteDialogComponent {
  carrera?: Carrera;

  constructor(private carreraService: CarreraService, public activeModal: NgbActiveModal, private eventManager: JhiEventManager) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: any): void {
    this.carreraService.delete(id).subscribe(() => {
      this.eventManager.broadcast('carreraListModification');
      this.activeModal.close();
    });
  }
}

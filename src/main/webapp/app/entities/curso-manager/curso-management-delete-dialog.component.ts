import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { Curso } from 'app/core/curso/curso.model';
import { CursoService } from 'app/core/curso/curso.service';

@Component({
  selector: 'jhi-curso-mgmt-delete-dialog',
  templateUrl: './curso-management-delete-dialog.component.html',
})
export class CursoManagementDeleteDialogComponent {
  curso?: Curso;

  constructor(private cursoService: CursoService, public activeModal: NgbActiveModal, private eventManager: JhiEventManager) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: any): void {
    this.cursoService.delete(id).subscribe(() => {
      this.eventManager.broadcast('cursoListModification');
      this.activeModal.close();
    });
  }
}

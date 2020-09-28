import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Estudiante } from 'app/core/estudiante/estudiante.model';

@Component({
  selector: 'jhi-estudiante-mgmt-detail',
  templateUrl: './estudiante-management-detail.component.html',
})
export class EstudianteManagementDetailComponent implements OnInit {
  estudiante: Estudiante | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe(({ estudiante }) => (this.estudiante = estudiante));
  }
}

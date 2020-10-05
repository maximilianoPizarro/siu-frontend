import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Materia } from 'app/core/materia/materia.model';

@Component({
  selector: 'jhi-materia-mgmt-detail',
  templateUrl: './materia-management-detail.component.html',
})
export class MateriaManagementDetailComponent implements OnInit {
  materia: Materia | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe(({ materia }) => (this.materia = materia));
  }
}

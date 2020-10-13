import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Examen } from 'app/core/examen/examen.model';

@Component({
  selector: 'jhi-examen-mgmt-detail',
  templateUrl: './examen-management-detail.component.html',
})
export class ExamenManagementDetailComponent implements OnInit {
  examen: Examen | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe(({ examen }) => (this.examen = examen));
  }
}

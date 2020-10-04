import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Carrera } from 'app/core/carrera/carrera.model';

@Component({
  selector: 'jhi-carrera-mgmt-detail',
  templateUrl: './carrera-management-detail.component.html',
})
export class CarreraManagementDetailComponent implements OnInit {
  carrera: Carrera | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe(({ carrera }) => (this.carrera = carrera));
  }
}

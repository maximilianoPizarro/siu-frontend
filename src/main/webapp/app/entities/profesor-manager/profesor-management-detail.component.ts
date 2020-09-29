import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Profesor } from 'app/core/profesor/profesor.model';

@Component({
  selector: 'jhi-profesor-mgmt-detail',
  templateUrl: './profesor-management-detail.component.html',
})
export class ProfesorManagementDetailComponent implements OnInit {
  profesor: Profesor | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe(({ profesor }) => (this.profesor = profesor));
  }
}

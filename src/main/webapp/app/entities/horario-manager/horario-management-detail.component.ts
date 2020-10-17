import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Horario } from 'app/core/horario/horario.model';

@Component({
  selector: 'jhi-horario-mgmt-detail',
  templateUrl: './horario-management-detail.component.html',
})
export class HorarioManagementDetailComponent implements OnInit {
  horario: Horario | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe(({ horario }) => (this.horario = horario));
  }
}

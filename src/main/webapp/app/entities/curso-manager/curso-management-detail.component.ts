import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Curso } from 'app/core/curso/curso.model';

@Component({
  selector: 'jhi-curso-mgmt-detail',
  templateUrl: './curso-management-detail.component.html',
})
export class CursoManagementDetailComponent implements OnInit {
  curso: Curso | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe(({ curso }) => (this.curso = curso));
  }
}

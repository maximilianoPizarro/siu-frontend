import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_ESTUDIANTES } from 'app/app.constants';
import { createRequestOption, Pagination } from 'app/shared/util/request-util';
import { IMateria } from './materia.model';
import { IMateriaAlumno } from './materiaalumno';
import { Calificacion, ICalificarExamen, ICalificarCursada } from './calificacion.model';

@Injectable({ providedIn: 'root' })
export class CalificacionesService {
  public resourceUrl = SERVER_API_ESTUDIANTES;

  constructor(private http: HttpClient) {}

  traerMaterias(req?: Pagination, idDocente?: any): Observable<HttpResponse<IMateria[]>> {
    const options = createRequestOption(req);
    return this.http.get<IMateria[]>(`${this.resourceUrl}traerMaterias/${idDocente}`, {
      params: options,
      observe: 'response',
    });
  }

  listadoAlumnosPorMateria(req?: Pagination, cursada?: Calificacion): Observable<HttpResponse<IMateriaAlumno[]>> {
    const options = createRequestOption(req);
    return this.http.post<IMateriaAlumno[]>(`${this.resourceUrl}listadoAlumnosPorMateria`, cursada, {
      params: options,
      observe: 'response',
    });
  }

  cargaNotasFinales(cursada: ICalificarExamen): Observable<ICalificarExamen> {
    return this.http.post<ICalificarExamen>(`${this.resourceUrl}cargaNotasFinales`, cursada);
  }

  cargaNotasCursada(cursada: ICalificarCursada): Observable<ICalificarCursada> {
    return this.http.post<ICalificarCursada>(`${this.resourceUrl}cargaNotasCursada`, cursada);
  }
}

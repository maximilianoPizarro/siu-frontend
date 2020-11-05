import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_ESTUDIANTES } from 'app/app.constants';
import { createRequestOption, Pagination } from 'app/shared/util/request-util';
import { IMateria } from './materia.model';
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

  listadoAlumnosPorMateria(cursada: Calificacion): Observable<IMateria> {
    return this.http.post<IMateria>(`${this.resourceUrl}listadoAlumnosPorMateria`, cursada);
  }

  cargaNotasFinales(cursada: ICalificarExamen): Observable<ICalificarExamen> {
    return this.http.post<ICalificarExamen>(`${this.resourceUrl}cargaNotasFinales`, cursada);
  }

  cargaNotasCursada(cursada: ICalificarCursada): Observable<ICalificarCursada> {
    return this.http.post<ICalificarCursada>(`${this.resourceUrl}cargaNotasCursada`, cursada);
  }
}

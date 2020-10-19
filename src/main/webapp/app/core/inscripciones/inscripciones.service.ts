import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_ESTUDIANTES } from 'app/app.constants';
import { IExamenes } from './examenes.model';
import { ICursadas } from './cursadas.model';
import { createRequestOption, Pagination } from 'app/shared/util/request-util';

@Injectable({ providedIn: 'root' })
export class InscripcionesService {
  public resourceUrl = SERVER_API_ESTUDIANTES;

  constructor(private http: HttpClient) {}
  //inscripcion a cursadas
  inscribirEstudianteCursada(cursada: ICursadas): Observable<ICursadas> {
    return this.http.post<ICursadas>(`${this.resourceUrl}inscribirEstudianteCursada`, cursada);
  }

  traerMateriasParaInscripcion(): Observable<ICursadas[]> {
    return this.http.get<ICursadas[]>(`${this.resourceUrl}traerMateriasParaInscripcion`);
  }

  bajaInscripcionMateria(id: any): Observable<{}> {
    return this.http.delete(`${this.resourceUrl}bajaInscripcionMateria`);
  }

  //inscripcion a cursadas

  inscribirEstudianteExamen(cursada: IExamenes): Observable<IExamenes> {
    return this.http.post<IExamenes>(`${this.resourceUrl}inscribirEstudianteExamen`, cursada);
  }

  bajaInscripcionExamen(id: any): Observable<{}> {
    return this.http.delete(`${this.resourceUrl}bajaInscripcionExamen`);
  }

  traerExamenesParaInscripcion(req?: Pagination): Observable<HttpResponse<IExamenes[]>> {
    const options = createRequestOption(req);
    return this.http.get<IExamenes[]>(`${this.resourceUrl}traerMateriasParaInscripcion`, { params: options, observe: 'response' });
  }

  enviarNotificacionExamen(): Observable<IExamenes[]> {
    return this.http.get<IExamenes[]>(`${this.resourceUrl}enviarNotificacionExamen`);
  }
}

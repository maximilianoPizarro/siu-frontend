import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_ESTUDIANTES } from 'app/app.constants';
import { IExamenes } from './examenes.model';
import { ICursadaIncripcion } from './cursadainscripcion.model';
import { IMaterias } from './materias.model';
import { createRequestOption, Pagination } from 'app/shared/util/request-util';
import { IExamenIncripcion } from './exameninscripcion.model';
import { IExamenConsulta } from './examenconsulta.model';

@Injectable({ providedIn: 'root' })
export class InscripcionesService {
  public resourceUrl = SERVER_API_ESTUDIANTES;

  constructor(private http: HttpClient) {}

  inscribirEstudianteCursada(cursada: ICursadaIncripcion): Observable<ICursadaIncripcion> {
    return this.http.post<ICursadaIncripcion>(`${this.resourceUrl}inscribirEstudianteCursada`, cursada);
  }

  traerMateriasParaInscripcion(req?: Pagination): Observable<HttpResponse<IMaterias[]>> {
    const options = createRequestOption(req);
    return this.http.get<IMaterias[]>(`${this.resourceUrl}traerMateriasParaInscripcion`, { params: options, observe: 'response' });
  }

  traerInscripcionesEstudianteCursada(req?: Pagination, idEstudiante?: any): Observable<HttpResponse<IExamenConsulta[]>> {
    const options = createRequestOption(req);
    return this.http.get<IExamenConsulta[]>(`${this.resourceUrl}traerInscripcionesEstudianteCursada/${idEstudiante}`, {
      params: options,
      observe: 'response',
    });
  }

  bajaInscripcionMateria(): Observable<{}> {
    return this.http.delete(`${this.resourceUrl}bajaInscripcionMateria`);
  }

  inscribirEstudianteExamen(cursada: IExamenIncripcion): Observable<IExamenIncripcion> {
    return this.http.post<IExamenIncripcion>(`${this.resourceUrl}inscribirEstudianteExamen`, cursada);
  }

  bajaInscripcionExamen(idInscriptosExamen: any): Observable<{}> {
    return this.http.delete(`${this.resourceUrl}bajaInscripcionExamen/${idInscriptosExamen}`);
  }

  traerExamenesParaInscripcion(req?: Pagination): Observable<HttpResponse<IMaterias[]>> {
    const options = createRequestOption(req);
    return this.http.get<IMaterias[]>(`${this.resourceUrl}traerExamenesParaInscripcion`, { params: options, observe: 'response' });
  }

  traerInscripcionesEstudianteExamen(req?: Pagination, idEstudiante?: any): Observable<HttpResponse<IExamenConsulta[]>> {
    const options = createRequestOption(req);
    return this.http.get<IExamenConsulta[]>(`${this.resourceUrl}traerInscripcionesEstudianteExamen/${idEstudiante}`, {
      params: options,
      observe: 'response',
    });
  }

  enviarNotificacionExamen(): Observable<IExamenes[]> {
    return this.http.get<IExamenes[]>(`${this.resourceUrl}enviarNotificacionExamen`);
  }
}

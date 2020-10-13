import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_ESTUDIANTES } from 'app/app.constants';
import { createRequestOption, Pagination } from 'app/shared/util/request-util';
import { IExamen } from './examen.model';

@Injectable({ providedIn: 'root' })
export class ExamenService {
  public resourceUrl = SERVER_API_ESTUDIANTES + 'examenes';

  constructor(private http: HttpClient) {}

  create(examen: IExamen): Observable<IExamen> {
    return this.http.post<IExamen>(this.resourceUrl, examen);
  }

  update(examen: IExamen): Observable<IExamen> {
    return this.http.put<IExamen>(`${this.resourceUrl}/${examen.idExamenes}`, examen);
  }

  find(id: any): Observable<IExamen> {
    return this.http.get<IExamen>(`${this.resourceUrl}/${id}`);
  }

  query(req?: Pagination): Observable<HttpResponse<IExamen[]>> {
    const options = createRequestOption(req);
    return this.http.get<IExamen[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: any): Observable<{}> {
    return this.http.delete(`${this.resourceUrl}/${id}`);
  }
}

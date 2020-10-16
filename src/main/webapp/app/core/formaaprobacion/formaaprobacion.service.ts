import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_ESTUDIANTES } from 'app/app.constants';
import { createRequestOption, Pagination } from 'app/shared/util/request-util';
import { IFormaAprobacion } from './formaaprobacion.model';

@Injectable({ providedIn: 'root' })
export class FormaAprobacionService {
  public resourceUrl = SERVER_API_ESTUDIANTES + 'formasaprobacion';

  constructor(private http: HttpClient) {}

  create(formaaprobacion: IFormaAprobacion): Observable<IFormaAprobacion> {
    return this.http.post<IFormaAprobacion>(this.resourceUrl, formaaprobacion);
  }

  update(formaaprobacion: IFormaAprobacion): Observable<IFormaAprobacion> {
    return this.http.put<IFormaAprobacion>(`${this.resourceUrl}/${formaaprobacion.idFormaAprobacion}`, formaaprobacion);
  }

  find(id: any): Observable<IFormaAprobacion> {
    return this.http.get<IFormaAprobacion>(`${this.resourceUrl}/${id}`);
  }

  query(req?: Pagination): Observable<HttpResponse<IFormaAprobacion[]>> {
    const options = createRequestOption(req);
    return this.http.get<IFormaAprobacion[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: any): Observable<{}> {
    return this.http.delete(`${this.resourceUrl}/${id}`);
  }
}

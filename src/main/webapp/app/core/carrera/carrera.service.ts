import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_ESTUDIANTES } from 'app/app.constants';
import { createRequestOption, Pagination } from 'app/shared/util/request-util';
import { ICarrera } from './carrera.model';

@Injectable({ providedIn: 'root' })
export class CarreraService {
  public resourceUrl = SERVER_API_ESTUDIANTES + 'carrera';

  constructor(private http: HttpClient) {}

  create(carrera: ICarrera): Observable<ICarrera> {
    return this.http.post<ICarrera>(this.resourceUrl, carrera);
  }

  update(carrera: ICarrera): Observable<ICarrera> {
    return this.http.put<ICarrera>(this.resourceUrl, carrera);
  }

  find(id: any): Observable<ICarrera> {
    return this.http.get<ICarrera>(`${this.resourceUrl}/${id}`);
  }

  query(req?: Pagination): Observable<HttpResponse<ICarrera[]>> {
    const options = createRequestOption(req);
    return this.http.get<ICarrera[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: any): Observable<{}> {
    return this.http.delete(`${this.resourceUrl}/${id}`);
  }
}

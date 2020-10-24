import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption, Pagination } from 'app/shared/util/request-util';
import { IProfesor, IProfesorCreate } from './profesor.model';

@Injectable({ providedIn: 'root' })
export class ProfesorService {
  public resourceUrl = SERVER_API_URL + 'api/profesores';

  constructor(private http: HttpClient) {}

  create(profesor: IProfesorCreate): Observable<IProfesorCreate> {
    return this.http.post<IProfesorCreate>(this.resourceUrl, profesor);
  }

  update(profesor: IProfesor): Observable<IProfesor> {
    return this.http.put<IProfesor>(this.resourceUrl, profesor);
  }

  find(id: any): Observable<IProfesor> {
    return this.http.get<IProfesor>(`${this.resourceUrl}/${id}`);
  }

  query(req?: Pagination): Observable<HttpResponse<IProfesor[]>> {
    const options = createRequestOption(req);
    return this.http.get<IProfesor[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: any): Observable<{}> {
    return this.http.delete(`${this.resourceUrl}/${id}`);
  }
}

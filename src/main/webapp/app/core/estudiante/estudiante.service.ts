import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption, Pagination } from 'app/shared/util/request-util';
import { IEstudiante } from './estudiante.model';

@Injectable({ providedIn: 'root' })
export class EstudianteService {
  public resourceUrl = SERVER_API_URL + 'api/estudiantes';

  constructor(private http: HttpClient) {}

  create(estudiante: IEstudiante): Observable<IEstudiante> {
    return this.http.post<IEstudiante>(this.resourceUrl, estudiante);
  }

  update(estudiante: IEstudiante): Observable<IEstudiante> {
    return this.http.put<IEstudiante>(this.resourceUrl, estudiante);
  }

  find(id: any): Observable<IEstudiante> {
    return this.http.get<IEstudiante>(`${this.resourceUrl}/${id}`);
  }

  query(req?: Pagination): Observable<HttpResponse<IEstudiante[]>> {
    const options = createRequestOption(req);
    return this.http.get<IEstudiante[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: any): Observable<{}> {
    return this.http.delete(`${this.resourceUrl}/${id}`);
  }
}

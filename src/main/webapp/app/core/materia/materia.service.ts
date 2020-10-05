import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_ESTUDIANTES } from 'app/app.constants';
import { createRequestOption, Pagination } from 'app/shared/util/request-util';
import { IMateria } from './materia.model';

@Injectable({ providedIn: 'root' })
export class MateriaService {
  public resourceUrl = SERVER_API_ESTUDIANTES + 'materias';

  constructor(private http: HttpClient) {}

  create(materia: IMateria): Observable<IMateria> {
    return this.http.post<IMateria>(this.resourceUrl, materia);
  }

  update(materia: IMateria): Observable<IMateria> {
    return this.http.put<IMateria>(`${this.resourceUrl}/${materia.idMaterias}`, materia);
  }

  find(id: any): Observable<IMateria> {
    return this.http.get<IMateria>(`${this.resourceUrl}/${id}`);
  }

  query(req?: Pagination): Observable<HttpResponse<IMateria[]>> {
    const options = createRequestOption(req);
    return this.http.get<IMateria[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: any): Observable<{}> {
    return this.http.delete(`${this.resourceUrl}/${id}`);
  }
}

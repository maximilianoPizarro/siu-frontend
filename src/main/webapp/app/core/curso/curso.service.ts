import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_ESTUDIANTES } from 'app/app.constants';
import { createRequestOption, Pagination } from 'app/shared/util/request-util';
import { ICurso } from './curso.model';

@Injectable({ providedIn: 'root' })
export class CursoService {
  public resourceUrl = SERVER_API_ESTUDIANTES + 'cursos';

  constructor(private http: HttpClient) {}

  create(curso: ICurso): Observable<ICurso> {
    return this.http.post<ICurso>(this.resourceUrl, curso);
  }

  update(curso: ICurso): Observable<ICurso> {
    return this.http.put<ICurso>(`${this.resourceUrl}/${curso.idCurso}`, curso);
  }

  find(id: any): Observable<ICurso> {
    return this.http.get<ICurso>(`${this.resourceUrl}/${id}`);
  }

  query(req?: Pagination): Observable<HttpResponse<ICurso[]>> {
    const options = createRequestOption(req);
    return this.http.get<ICurso[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: any): Observable<{}> {
    return this.http.delete(`${this.resourceUrl}/${id}`);
  }
}

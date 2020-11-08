import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_ESTUDIANTES } from 'app/app.constants';
import { createRequestOption, Pagination } from 'app/shared/util/request-util';

@Injectable({ providedIn: 'root' })
export class AnaliticoService {
  public resourceUrl = SERVER_API_ESTUDIANTES;

  constructor(private http: HttpClient) {}

  traerAnalitico(req?: Pagination, idEstudiante?: any): Observable<HttpResponse<Blob>> {
    const options = createRequestOption(req);
    return this.http.get<Blob>(`${this.resourceUrl}traerAnalitico/${idEstudiante}`, {
      params: options,
      observe: 'response',
    });
  }
}

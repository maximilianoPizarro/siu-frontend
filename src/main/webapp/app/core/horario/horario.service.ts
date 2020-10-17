import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_ESTUDIANTES } from 'app/app.constants';
import { createRequestOption, Pagination } from 'app/shared/util/request-util';
import { IHorario } from './horario.model';

@Injectable({ providedIn: 'root' })
export class HorarioService {
  public resourceUrl = SERVER_API_ESTUDIANTES + 'horarios';

  constructor(private http: HttpClient) {}

  create(horario: IHorario): Observable<IHorario> {
    return this.http.post<IHorario>(this.resourceUrl, horario);
  }

  update(horario: IHorario): Observable<IHorario> {
    return this.http.put<IHorario>(`${this.resourceUrl}/${horario.idHorario}`, horario);
  }

  find(id: any): Observable<IHorario> {
    return this.http.get<IHorario>(`${this.resourceUrl}/${id}`);
  }

  query(req?: Pagination): Observable<HttpResponse<IHorario[]>> {
    const options = createRequestOption(req);
    return this.http.get<IHorario[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: any): Observable<{}> {
    return this.http.delete(`${this.resourceUrl}/${id}`);
  }
}

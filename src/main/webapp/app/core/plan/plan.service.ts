import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_ESTUDIANTES } from 'app/app.constants';
import { createRequestOption, Pagination } from 'app/shared/util/request-util';
import { IPlan } from './plan.model';

@Injectable({ providedIn: 'root' })
export class PlanService {
  public resourceUrl = SERVER_API_ESTUDIANTES + 'planes';

  constructor(private http: HttpClient) {}

  create(plan: IPlan): Observable<IPlan> {
    return this.http.post<IPlan>(this.resourceUrl, plan);
  }

  update(plan: IPlan): Observable<IPlan> {
    return this.http.put<IPlan>(`${this.resourceUrl}/${plan.idPlan}`, plan);
  }

  find(id: any): Observable<IPlan> {
    return this.http.get<IPlan>(`${this.resourceUrl}/${id}`);
  }

  query(req?: Pagination): Observable<HttpResponse<IPlan[]>> {
    const options = createRequestOption(req);
    return this.http.get<IPlan[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: any): Observable<{}> {
    return this.http.delete(`${this.resourceUrl}/${id}`);
  }
}

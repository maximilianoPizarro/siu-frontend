import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse, HttpHeaders } from '@angular/common/http';
import { Subscription, combineLatest } from 'rxjs';
import { ActivatedRoute, ParamMap, Router, Data } from '@angular/router';
import { JhiEventManager } from 'ng-jhipster';

import { ITEMS_PER_PAGE } from 'app/shared/constants/pagination.constants';
import { AnaliticoService } from 'app/core/analitico/analitico.service';
import { AccountService } from 'app/core/auth/account.service';
import { Account } from 'app/core/user/account.model';
import { ExportAsConfig, ExportAsService } from 'ngx-export-as';
import { IExamenes } from 'app/core/analitico/examenes.model';

@Component({
  selector: 'jhi-analitico-mgmt',
  templateUrl: './analitico.component.html',
})
export class AnaliticoManagementComponent implements OnInit, OnDestroy {
  currentAccount: Account | null = null;
  authSubscription?: Subscription;
  analitico: IExamenes[] | null = null;
  analiticoSubscription?: Subscription;
  totalItems = 0;
  itemsPerPage = ITEMS_PER_PAGE;
  page!: number;
  predicate!: string;
  ascending!: boolean;

  constructor(
    private accountService: AccountService,
    private analiticoService: AnaliticoService,
    private router: Router,
    private exportAsService: ExportAsService,
    private eventManager: JhiEventManager,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.accountService.identity().subscribe(currentAccount => (this.currentAccount = currentAccount));
    this.analiticoSubscription = this.eventManager.subscribe('analiticoSubscription', () => this.loadAll());
    this.handleNavigation();
  }

  ngOnDestroy(): void {
    if (this.analiticoSubscription) {
      this.eventManager.destroy(this.analiticoSubscription);
    }
  }

  private loadAll(): void {
    this.analiticoSubscription = this.analiticoService
      .traerAnalitico(
        {
          page: this.page - 1,
          size: this.itemsPerPage,
          sort: this.sort(),
        },
        this.currentAccount?.id
      )
      .subscribe((res: HttpResponse<IExamenes[]>) => this.onSuccess(res.body, res.headers));
  }

  private onSuccess(analitico: IExamenes[] | null, headers: HttpHeaders): void {
    this.totalItems = Number(headers.get('X-Total-Count'));
    this.analitico = analitico;
  }

  exportPdf(): void {
    const exportAsConfig: ExportAsConfig = {
      type: 'pdf',
      elementIdOrContent: 'mitituloanalitico',
    };
    this.exportAsService
      .save(exportAsConfig, 'Titulo_Analitico_' + this.currentAccount?.firstName + '_' + this.currentAccount?.lastName)
      .subscribe(() => {});
  }

  private handleNavigation(): void {
    combineLatest(this.activatedRoute.data, this.activatedRoute.queryParamMap, (data: Data, params: ParamMap) => {
      const page = params.get('page');
      this.page = page !== null ? +page : 1;
      const sort = (params.get('sort') ?? data['defaultSort']).split(',');
      this.predicate = sort[0];
      this.ascending = sort[1] === 'asc';
      this.loadAll();
    }).subscribe();
  }
  private sort(): string[] {
    const result = [this.predicate + ',' + (this.ascending ? 'asc' : 'desc')];
    if (this.predicate !== 'idEstudiante') {
      result.push('idEstudiante');
    }
    return result;
  }
}

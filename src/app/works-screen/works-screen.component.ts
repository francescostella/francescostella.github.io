import { Component, OnInit, OnDestroy } from '@angular/core';

import { Apollo } from 'apollo-angular';  
import gql from 'graphql-tag';  
import WORKS_QUERY from '../apollo/queries/work/works';  
import CLIENTS_QUERY from '../apollo/queries/client/clients';
import { Subscription } from 'rxjs';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-works',
  templateUrl: './works-screen.component.html',
  styleUrls: ['./works-screen.component.scss']
})
export class WorksScreenComponent implements OnInit, OnDestroy {
  data: any = {};
  loading = true;
  errors: any;
  listWorks: any[];

  public apiUrl = environment.apiUrl;
  private queryWorks: Subscription;
  private queryClients: Subscription;

  constructor(
    private apollo: Apollo,
  ) { }

  ngOnInit() {
    this.queryWorks = this.apollo
      .watchQuery({
        query: WORKS_QUERY
      })
      .valueChanges.subscribe(result => {
        this.data = result.data;
        this.listWorks = this.data.works;
        this.loading = result.loading;
        this.errors = result.errors;
      });

    this.queryClients = this.apollo
      .watchQuery({
        query: CLIENTS_QUERY
      })
      .valueChanges.subscribe(result => {
        this.data = result.data;
        this.loading = result.loading;
        this.errors = result.errors;
      });
  }

  ngOnDestroy() {
    this.queryWorks.unsubscribe();
    this.queryClients.unsubscribe();
  }

}

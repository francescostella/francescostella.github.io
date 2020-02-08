import { Component, OnInit, OnDestroy } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import CLIENTS_QUERY from '../apollo/queries/client/clients';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit, OnDestroy {
  data: any = {};
  loading = true;
  errors: any;

  private queryClients: Subscription;

  constructor(
    private apollo: Apollo
  ) { }

  ngOnInit() {
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

  ngOnDestroy(): void {
    this.queryClients.unsubscribe();
  }

}

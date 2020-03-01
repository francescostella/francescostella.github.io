import { Component, OnInit, OnDestroy } from '@angular/core';

import { Apollo } from 'apollo-angular';  
import gql from 'graphql-tag';  
import WORKS_QUERY from '../apollo/queries/work/works';  
import { Subscription } from 'rxjs';

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

  private queryWorks: Subscription;

  constructor(
    private apollo: Apollo
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
  }

  ngOnDestroy() {
    this.queryWorks.unsubscribe();
  }

}

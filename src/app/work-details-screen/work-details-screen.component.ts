import { Component, OnInit } from '@angular/core';

import { Apollo } from 'apollo-angular';  
import gql from 'graphql-tag';  
import WORK_QUERY from '../apollo/queries/work/work';  
import { ActivatedRoute } from '@angular/router';  
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-work',
  templateUrl: './work-details-screen.component.html',
  styleUrls: ['./work-details-screen.component.scss']
})
export class WorkDetailsScreenComponent implements OnInit {
  data: any = {};
  loading = true;
  errors: any;

  private queryWork: Subscription;

  constructor(
    private apollo: Apollo,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.queryWork = this.apollo
      .watchQuery({
        query: WORK_QUERY,
        variables: {
          id: this.route.snapshot.paramMap.get('id')
        }
      })
      .valueChanges.subscribe(result => {
        this.data = result.data;
        this.loading = result.loading;
        this.errors = result.errors;
      });
  }

  ngOnDestroy() {
    this.queryWork.unsubscribe();
  }

}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkDetailsScreenComponent } from './work-details-screen.component';
import { Apollo } from 'apollo-angular';
import { ActivatedRoute } from '@angular/router';
import {
  ApolloTestingModule,
  ApolloTestingController,
} from 'apollo-angular/testing';

const fakeActivatedRoute = {
  snapshot: { 
    paramMap: {
      get(): number {
        return 1;
      }
    }
   }
};

describe('WorkDetailsScreenComponent', () => {
  let component: WorkDetailsScreenComponent;
  let fixture: ComponentFixture<WorkDetailsScreenComponent>;
  let controller: ApolloTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkDetailsScreenComponent ],
      imports: [
        ApolloTestingModule
      ],
      providers: [ 
        Apollo,
        {
          provide: ActivatedRoute,
          useValue: fakeActivatedRoute
        },
      ]
    })
    .compileComponents();

    controller = TestBed.get(ApolloTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkDetailsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    // controller.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

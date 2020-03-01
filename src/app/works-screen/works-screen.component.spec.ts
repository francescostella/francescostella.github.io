import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksScreenComponent } from './works-screen.component';
import { Apollo } from 'apollo-angular';
import {
  ApolloTestingModule,
  ApolloTestingController,
} from 'apollo-angular/testing';

describe('WorksScreenComponent', () => {
  let component: WorksScreenComponent;
  let fixture: ComponentFixture<WorksScreenComponent>;
  let controller: ApolloTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorksScreenComponent ],
      imports: [
        ApolloTestingModule
      ],
      providers: [ 
        Apollo,
      ]
    })
    .compileComponents();

    controller = TestBed.get(ApolloTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

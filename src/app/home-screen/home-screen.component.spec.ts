import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeScreenComponent } from './home-screen.component';

describe('HomeScreenComponent', () => {
  let component: HomeScreenComponent;
  let fixture: ComponentFixture<HomeScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Francesco Stella'`, () => {
    const fixture = TestBed.createComponent(HomeScreenComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Francesco Stella');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(HomeScreenComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.home-screen__title').textContent).toContain('Francesco Stella');
  });
});

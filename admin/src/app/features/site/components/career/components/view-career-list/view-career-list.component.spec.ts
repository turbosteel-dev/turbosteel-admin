import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCareerListComponent } from './view-career-list.component';

describe('ViewCareerListComponent', () => {
  let component: ViewCareerListComponent;
  let fixture: ComponentFixture<ViewCareerListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewCareerListComponent]
    });
    fixture = TestBed.createComponent(ViewCareerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

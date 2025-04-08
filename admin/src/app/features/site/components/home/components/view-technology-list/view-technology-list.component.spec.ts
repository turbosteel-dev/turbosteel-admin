import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTechnologyListComponent } from './view-technology-list.component';

describe('ViewTechnologyListComponent', () => {
  let component: ViewTechnologyListComponent;
  let fixture: ComponentFixture<ViewTechnologyListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewTechnologyListComponent]
    });
    fixture = TestBed.createComponent(ViewTechnologyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

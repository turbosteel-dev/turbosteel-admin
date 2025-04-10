import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMProcessDetailComponent } from './view-m-process-detail.component';

describe('ViewMProcessDetailComponent', () => {
  let component: ViewMProcessDetailComponent;
  let fixture: ComponentFixture<ViewMProcessDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewMProcessDetailComponent]
    });
    fixture = TestBed.createComponent(ViewMProcessDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

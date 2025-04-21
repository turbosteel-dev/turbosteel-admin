import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBuyFormComponent } from './view-buy-form.component';

describe('ViewBuyFormComponent', () => {
  let component: ViewBuyFormComponent;
  let fixture: ComponentFixture<ViewBuyFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewBuyFormComponent]
    });
    fixture = TestBed.createComponent(ViewBuyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

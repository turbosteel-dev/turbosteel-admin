import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductFeatureDetailComponent } from './view-product-feature-detail.component';

describe('ViewProductFeatureDetailComponent', () => {
  let component: ViewProductFeatureDetailComponent;
  let fixture: ComponentFixture<ViewProductFeatureDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewProductFeatureDetailComponent]
    });
    fixture = TestBed.createComponent(ViewProductFeatureDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

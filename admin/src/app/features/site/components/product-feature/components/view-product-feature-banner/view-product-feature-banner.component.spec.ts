import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductFeatureBannerComponent } from './view-product-feature-banner.component';

describe('ViewProductFeatureBannerComponent', () => {
  let component: ViewProductFeatureBannerComponent;
  let fixture: ComponentFixture<ViewProductFeatureBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewProductFeatureBannerComponent]
    });
    fixture = TestBed.createComponent(ViewProductFeatureBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

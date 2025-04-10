import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFeatureBannerComponent } from './product-feature-banner.component';

describe('ProductFeatureBannerComponent', () => {
  let component: ProductFeatureBannerComponent;
  let fixture: ComponentFixture<ProductFeatureBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductFeatureBannerComponent]
    });
    fixture = TestBed.createComponent(ProductFeatureBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

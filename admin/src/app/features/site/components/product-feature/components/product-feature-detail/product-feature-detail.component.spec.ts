import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFeatureDetailComponent } from './product-feature-detail.component';

describe('ProductFeatureDetailComponent', () => {
  let component: ProductFeatureDetailComponent;
  let fixture: ComponentFixture<ProductFeatureDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductFeatureDetailComponent]
    });
    fixture = TestBed.createComponent(ProductFeatureDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProductFeatureBannerComponent } from './new-product-feature-banner.component';

describe('NewProductFeatureBannerComponent', () => {
  let component: NewProductFeatureBannerComponent;
  let fixture: ComponentFixture<NewProductFeatureBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewProductFeatureBannerComponent]
    });
    fixture = TestBed.createComponent(NewProductFeatureBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

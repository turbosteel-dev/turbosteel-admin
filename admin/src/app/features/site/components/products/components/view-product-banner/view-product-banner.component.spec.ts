import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductBannerComponent } from './view-product-banner.component';

describe('ViewProductBannerComponent', () => {
  let component: ViewProductBannerComponent;
  let fixture: ComponentFixture<ViewProductBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewProductBannerComponent]
    });
    fixture = TestBed.createComponent(ViewProductBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

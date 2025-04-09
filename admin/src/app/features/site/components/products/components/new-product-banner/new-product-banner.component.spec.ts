import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProductBannerComponent } from './new-product-banner.component';

describe('NewProductBannerComponent', () => {
  let component: NewProductBannerComponent;
  let fixture: ComponentFixture<NewProductBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewProductBannerComponent]
    });
    fixture = TestBed.createComponent(NewProductBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

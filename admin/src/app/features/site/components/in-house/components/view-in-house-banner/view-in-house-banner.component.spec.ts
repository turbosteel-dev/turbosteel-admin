import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInHouseBannerComponent } from './view-in-house-banner.component';

describe('ViewInHouseBannerComponent', () => {
  let component: ViewInHouseBannerComponent;
  let fixture: ComponentFixture<ViewInHouseBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewInHouseBannerComponent]
    });
    fixture = TestBed.createComponent(ViewInHouseBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

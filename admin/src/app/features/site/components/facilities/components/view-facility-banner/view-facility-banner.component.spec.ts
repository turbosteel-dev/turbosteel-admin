import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFacilityBannerComponent } from './view-facility-banner.component';

describe('ViewFacilityBannerComponent', () => {
  let component: ViewFacilityBannerComponent;
  let fixture: ComponentFixture<ViewFacilityBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewFacilityBannerComponent]
    });
    fixture = TestBed.createComponent(ViewFacilityBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

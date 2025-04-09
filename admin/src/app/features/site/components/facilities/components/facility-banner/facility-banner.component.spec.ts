import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityBannerComponent } from './facility-banner.component';

describe('FacilityBannerComponent', () => {
  let component: FacilityBannerComponent;
  let fixture: ComponentFixture<FacilityBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacilityBannerComponent]
    });
    fixture = TestBed.createComponent(FacilityBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

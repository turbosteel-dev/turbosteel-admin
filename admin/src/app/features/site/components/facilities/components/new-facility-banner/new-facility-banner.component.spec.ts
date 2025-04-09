import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFacilityBannerComponent } from './new-facility-banner.component';

describe('NewFacilityBannerComponent', () => {
  let component: NewFacilityBannerComponent;
  let fixture: ComponentFixture<NewFacilityBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewFacilityBannerComponent]
    });
    fixture = TestBed.createComponent(NewFacilityBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

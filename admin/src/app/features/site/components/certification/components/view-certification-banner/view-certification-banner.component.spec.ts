import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCertificationBannerComponent } from './view-certification-banner.component';

describe('ViewCertificationBannerComponent', () => {
  let component: ViewCertificationBannerComponent;
  let fixture: ComponentFixture<ViewCertificationBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewCertificationBannerComponent]
    });
    fixture = TestBed.createComponent(ViewCertificationBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

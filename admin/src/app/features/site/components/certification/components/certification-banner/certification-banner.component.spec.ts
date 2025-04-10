import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationBannerComponent } from './certification-banner.component';

describe('CertificationBannerComponent', () => {
  let component: CertificationBannerComponent;
  let fixture: ComponentFixture<CertificationBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CertificationBannerComponent]
    });
    fixture = TestBed.createComponent(CertificationBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

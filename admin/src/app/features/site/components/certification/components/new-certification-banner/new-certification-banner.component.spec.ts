import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCertificationBannerComponent } from './new-certification-banner.component';

describe('NewCertificationBannerComponent', () => {
  let component: NewCertificationBannerComponent;
  let fixture: ComponentFixture<NewCertificationBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewCertificationBannerComponent]
    });
    fixture = TestBed.createComponent(NewCertificationBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

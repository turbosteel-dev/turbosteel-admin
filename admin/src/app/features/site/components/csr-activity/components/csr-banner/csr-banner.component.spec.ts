import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsrBannerComponent } from './csr-banner.component';

describe('CsrBannerComponent', () => {
  let component: CsrBannerComponent;
  let fixture: ComponentFixture<CsrBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CsrBannerComponent]
    });
    fixture = TestBed.createComponent(CsrBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

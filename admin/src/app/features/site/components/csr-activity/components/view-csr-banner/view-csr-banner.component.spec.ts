import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCsrBannerComponent } from './view-csr-banner.component';

describe('ViewCsrBannerComponent', () => {
  let component: ViewCsrBannerComponent;
  let fixture: ComponentFixture<ViewCsrBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewCsrBannerComponent]
    });
    fixture = TestBed.createComponent(ViewCsrBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

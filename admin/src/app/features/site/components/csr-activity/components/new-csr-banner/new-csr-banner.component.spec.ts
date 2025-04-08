import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCsrBannerComponent } from './new-csr-banner.component';

describe('NewCsrBannerComponent', () => {
  let component: NewCsrBannerComponent;
  let fixture: ComponentFixture<NewCsrBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewCsrBannerComponent]
    });
    fixture = TestBed.createComponent(NewCsrBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

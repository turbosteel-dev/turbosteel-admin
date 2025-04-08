import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErmBannerComponent } from './erm-banner.component';

describe('ErmBannerComponent', () => {
  let component: ErmBannerComponent;
  let fixture: ComponentFixture<ErmBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErmBannerComponent]
    });
    fixture = TestBed.createComponent(ErmBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

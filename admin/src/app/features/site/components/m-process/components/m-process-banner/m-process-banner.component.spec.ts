import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MProcessBannerComponent } from './m-process-banner.component';

describe('MProcessBannerComponent', () => {
  let component: MProcessBannerComponent;
  let fixture: ComponentFixture<MProcessBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MProcessBannerComponent]
    });
    fixture = TestBed.createComponent(MProcessBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

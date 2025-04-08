import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisionBannerComponent } from './vision-banner.component';

describe('VisionBannerComponent', () => {
  let component: VisionBannerComponent;
  let fixture: ComponentFixture<VisionBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisionBannerComponent]
    });
    fixture = TestBed.createComponent(VisionBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

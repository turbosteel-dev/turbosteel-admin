import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVisionBannerComponent } from './view-vision-banner.component';

describe('ViewVisionBannerComponent', () => {
  let component: ViewVisionBannerComponent;
  let fixture: ComponentFixture<ViewVisionBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewVisionBannerComponent]
    });
    fixture = TestBed.createComponent(ViewVisionBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

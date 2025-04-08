import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMediaBannerComponent } from './view-media-banner.component';

describe('ViewMediaBannerComponent', () => {
  let component: ViewMediaBannerComponent;
  let fixture: ComponentFixture<ViewMediaBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewMediaBannerComponent]
    });
    fixture = TestBed.createComponent(ViewMediaBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

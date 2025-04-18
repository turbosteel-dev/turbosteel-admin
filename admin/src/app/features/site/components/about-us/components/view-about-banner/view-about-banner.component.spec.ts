import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAboutBannerComponent } from './view-about-banner.component';

describe('ViewAboutBannerComponent', () => {
  let component: ViewAboutBannerComponent;
  let fixture: ComponentFixture<ViewAboutBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAboutBannerComponent]
    });
    fixture = TestBed.createComponent(ViewAboutBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

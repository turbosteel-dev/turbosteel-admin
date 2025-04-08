import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewContactBannerComponent } from './view-contact-banner.component';

describe('ViewContactBannerComponent', () => {
  let component: ViewContactBannerComponent;
  let fixture: ComponentFixture<ViewContactBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewContactBannerComponent]
    });
    fixture = TestBed.createComponent(ViewContactBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

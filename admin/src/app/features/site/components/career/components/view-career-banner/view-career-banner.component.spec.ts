import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCareerBannerComponent } from './view-career-banner.component';

describe('ViewCareerBannerComponent', () => {
  let component: ViewCareerBannerComponent;
  let fixture: ComponentFixture<ViewCareerBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewCareerBannerComponent]
    });
    fixture = TestBed.createComponent(ViewCareerBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

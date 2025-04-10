import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMProcessBannerComponent } from './view-m-process-banner.component';

describe('ViewMProcessBannerComponent', () => {
  let component: ViewMProcessBannerComponent;
  let fixture: ComponentFixture<ViewMProcessBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewMProcessBannerComponent]
    });
    fixture = TestBed.createComponent(ViewMProcessBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

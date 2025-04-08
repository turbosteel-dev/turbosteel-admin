import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewErmBannerComponent } from './view-erm-banner.component';

describe('ViewErmBannerComponent', () => {
  let component: ViewErmBannerComponent;
  let fixture: ComponentFixture<ViewErmBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewErmBannerComponent]
    });
    fixture = TestBed.createComponent(ViewErmBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

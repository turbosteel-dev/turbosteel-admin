import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InHouseBannerComponent } from './in-house-banner.component';

describe('InHouseBannerComponent', () => {
  let component: InHouseBannerComponent;
  let fixture: ComponentFixture<InHouseBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InHouseBannerComponent]
    });
    fixture = TestBed.createComponent(InHouseBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

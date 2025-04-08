import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMediaBannerComponent } from './new-media-banner.component';

describe('NewMediaBannerComponent', () => {
  let component: NewMediaBannerComponent;
  let fixture: ComponentFixture<NewMediaBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewMediaBannerComponent]
    });
    fixture = TestBed.createComponent(NewMediaBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

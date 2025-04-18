import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAboutBannerComponent } from './new-about-banner.component';

describe('NewAboutBannerComponent', () => {
  let component: NewAboutBannerComponent;
  let fixture: ComponentFixture<NewAboutBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewAboutBannerComponent]
    });
    fixture = TestBed.createComponent(NewAboutBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewContactBannerComponent } from './new-contact-banner.component';

describe('NewContactBannerComponent', () => {
  let component: NewContactBannerComponent;
  let fixture: ComponentFixture<NewContactBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewContactBannerComponent]
    });
    fixture = TestBed.createComponent(NewContactBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

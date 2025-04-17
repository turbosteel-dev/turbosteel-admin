import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCareerBannerComponent } from './new-career-banner.component';

describe('NewCareerBannerComponent', () => {
  let component: NewCareerBannerComponent;
  let fixture: ComponentFixture<NewCareerBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewCareerBannerComponent]
    });
    fixture = TestBed.createComponent(NewCareerBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

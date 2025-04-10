import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInHouseBannerComponent } from './new-in-house-banner.component';

describe('NewInHouseBannerComponent', () => {
  let component: NewInHouseBannerComponent;
  let fixture: ComponentFixture<NewInHouseBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewInHouseBannerComponent]
    });
    fixture = TestBed.createComponent(NewInHouseBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

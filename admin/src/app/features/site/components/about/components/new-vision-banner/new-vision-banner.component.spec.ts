import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVisionBannerComponent } from './new-vision-banner.component';

describe('NewVisionBannerComponent', () => {
  let component: NewVisionBannerComponent;
  let fixture: ComponentFixture<NewVisionBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewVisionBannerComponent]
    });
    fixture = TestBed.createComponent(NewVisionBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

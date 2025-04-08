import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewChairmanBannerComponent } from './new-chairman-banner.component';

describe('NewChairmanBannerComponent', () => {
  let component: NewChairmanBannerComponent;
  let fixture: ComponentFixture<NewChairmanBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewChairmanBannerComponent]
    });
    fixture = TestBed.createComponent(NewChairmanBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMProcessBannerComponent } from './new-m-process-banner.component';

describe('NewMProcessBannerComponent', () => {
  let component: NewMProcessBannerComponent;
  let fixture: ComponentFixture<NewMProcessBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewMProcessBannerComponent]
    });
    fixture = TestBed.createComponent(NewMProcessBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsBannerComponent } from './forms-banner.component';

describe('FormsBannerComponent', () => {
  let component: FormsBannerComponent;
  let fixture: ComponentFixture<FormsBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsBannerComponent]
    });
    fixture = TestBed.createComponent(FormsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

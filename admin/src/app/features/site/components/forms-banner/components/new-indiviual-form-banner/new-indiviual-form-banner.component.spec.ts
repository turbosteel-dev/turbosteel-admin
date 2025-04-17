import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewIndiviualFormBannerComponent } from './new-indiviual-form-banner.component';

describe('NewIndiviualFormBannerComponent', () => {
  let component: NewIndiviualFormBannerComponent;
  let fixture: ComponentFixture<NewIndiviualFormBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewIndiviualFormBannerComponent]
    });
    fixture = TestBed.createComponent(NewIndiviualFormBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

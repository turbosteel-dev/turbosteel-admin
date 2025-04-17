import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewIndiviualFormBannerComponent } from './view-indiviual-form-banner.component';

describe('ViewIndiviualFormBannerComponent', () => {
  let component: ViewIndiviualFormBannerComponent;
  let fixture: ComponentFixture<ViewIndiviualFormBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewIndiviualFormBannerComponent]
    });
    fixture = TestBed.createComponent(ViewIndiviualFormBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

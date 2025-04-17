import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiviualFormBannerComponent } from './indiviual-form-banner.component';

describe('IndiviualFormBannerComponent', () => {
  let component: IndiviualFormBannerComponent;
  let fixture: ComponentFixture<IndiviualFormBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndiviualFormBannerComponent]
    });
    fixture = TestBed.createComponent(IndiviualFormBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

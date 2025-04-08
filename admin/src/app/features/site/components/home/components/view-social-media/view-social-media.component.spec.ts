import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSocialMediaComponent } from './view-social-media.component';

describe('ViewSocialMediaComponent', () => {
  let component: ViewSocialMediaComponent;
  let fixture: ComponentFixture<ViewSocialMediaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewSocialMediaComponent]
    });
    fixture = TestBed.createComponent(ViewSocialMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

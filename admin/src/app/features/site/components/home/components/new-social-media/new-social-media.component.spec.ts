import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSocialMediaComponent } from './new-social-media.component';

describe('NewSocialMediaComponent', () => {
  let component: NewSocialMediaComponent;
  let fixture: ComponentFixture<NewSocialMediaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewSocialMediaComponent]
    });
    fixture = TestBed.createComponent(NewSocialMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

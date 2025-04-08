import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMediaImageComponent } from './new-media-image.component';

describe('NewMediaImageComponent', () => {
  let component: NewMediaImageComponent;
  let fixture: ComponentFixture<NewMediaImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewMediaImageComponent]
    });
    fixture = TestBed.createComponent(NewMediaImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

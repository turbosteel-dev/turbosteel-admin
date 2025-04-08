import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGalleryComponent } from './new-gallery.component';

describe('NewGalleryComponent', () => {
  let component: NewGalleryComponent;
  let fixture: ComponentFixture<NewGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewGalleryComponent]
    });
    fixture = TestBed.createComponent(NewGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

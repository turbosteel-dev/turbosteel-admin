import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAboutGalleryComponent } from './view-about-gallery.component';

describe('ViewAboutGalleryComponent', () => {
  let component: ViewAboutGalleryComponent;
  let fixture: ComponentFixture<ViewAboutGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAboutGalleryComponent]
    });
    fixture = TestBed.createComponent(ViewAboutGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

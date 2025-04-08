import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMediaImageComponent } from './view-media-image.component';

describe('ViewMediaImageComponent', () => {
  let component: ViewMediaImageComponent;
  let fixture: ComponentFixture<ViewMediaImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewMediaImageComponent]
    });
    fixture = TestBed.createComponent(ViewMediaImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

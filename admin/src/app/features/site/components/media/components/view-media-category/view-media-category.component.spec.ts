import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMediaCategoryComponent } from './view-media-category.component';

describe('ViewMediaCategoryComponent', () => {
  let component: ViewMediaCategoryComponent;
  let fixture: ComponentFixture<ViewMediaCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewMediaCategoryComponent]
    });
    fixture = TestBed.createComponent(ViewMediaCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

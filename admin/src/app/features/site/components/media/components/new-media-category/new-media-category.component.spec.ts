import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMediaCategoryComponent } from './new-media-category.component';

describe('NewMediaCategoryComponent', () => {
  let component: NewMediaCategoryComponent;
  let fixture: ComponentFixture<NewMediaCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewMediaCategoryComponent]
    });
    fixture = TestBed.createComponent(NewMediaCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

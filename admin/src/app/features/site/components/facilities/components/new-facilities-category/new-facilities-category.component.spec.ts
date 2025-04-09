import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFacilitiesCategoryComponent } from './new-facilities-category.component';

describe('NewFacilitiesCategoryComponent', () => {
  let component: NewFacilitiesCategoryComponent;
  let fixture: ComponentFixture<NewFacilitiesCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewFacilitiesCategoryComponent]
    });
    fixture = TestBed.createComponent(NewFacilitiesCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

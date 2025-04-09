import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFacilitiesCategoryComponent } from './view-facilities-category.component';

describe('ViewFacilitiesCategoryComponent', () => {
  let component: ViewFacilitiesCategoryComponent;
  let fixture: ComponentFixture<ViewFacilitiesCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewFacilitiesCategoryComponent]
    });
    fixture = TestBed.createComponent(ViewFacilitiesCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

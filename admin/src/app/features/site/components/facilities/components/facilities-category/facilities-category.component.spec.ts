import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilitiesCategoryComponent } from './facilities-category.component';

describe('FacilitiesCategoryComponent', () => {
  let component: FacilitiesCategoryComponent;
  let fixture: ComponentFixture<FacilitiesCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacilitiesCategoryComponent]
    });
    fixture = TestBed.createComponent(FacilitiesCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

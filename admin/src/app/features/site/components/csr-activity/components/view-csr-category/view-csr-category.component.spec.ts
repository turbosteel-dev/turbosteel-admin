import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCsrCategoryComponent } from './view-csr-category.component';

describe('ViewCsrCategoryComponent', () => {
  let component: ViewCsrCategoryComponent;
  let fixture: ComponentFixture<ViewCsrCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewCsrCategoryComponent]
    });
    fixture = TestBed.createComponent(ViewCsrCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

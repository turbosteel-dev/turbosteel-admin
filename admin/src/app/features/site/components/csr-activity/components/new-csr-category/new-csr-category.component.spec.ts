import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCsrCategoryComponent } from './new-csr-category.component';

describe('NewCsrCategoryComponent', () => {
  let component: NewCsrCategoryComponent;
  let fixture: ComponentFixture<NewCsrCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewCsrCategoryComponent]
    });
    fixture = TestBed.createComponent(NewCsrCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

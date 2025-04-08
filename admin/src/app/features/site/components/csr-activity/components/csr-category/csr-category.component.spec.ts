import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsrCategoryComponent } from './csr-category.component';

describe('CsrCategoryComponent', () => {
  let component: CsrCategoryComponent;
  let fixture: ComponentFixture<CsrCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CsrCategoryComponent]
    });
    fixture = TestBed.createComponent(CsrCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

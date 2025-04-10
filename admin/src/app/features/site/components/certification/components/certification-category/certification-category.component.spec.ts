import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationCategoryComponent } from './certification-category.component';

describe('CertificationCategoryComponent', () => {
  let component: CertificationCategoryComponent;
  let fixture: ComponentFixture<CertificationCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CertificationCategoryComponent]
    });
    fixture = TestBed.createComponent(CertificationCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

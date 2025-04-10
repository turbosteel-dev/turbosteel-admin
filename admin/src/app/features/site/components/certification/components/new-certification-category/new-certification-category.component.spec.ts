import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCertificationCategoryComponent } from './new-certification-category.component';

describe('NewCertificationCategoryComponent', () => {
  let component: NewCertificationCategoryComponent;
  let fixture: ComponentFixture<NewCertificationCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewCertificationCategoryComponent]
    });
    fixture = TestBed.createComponent(NewCertificationCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

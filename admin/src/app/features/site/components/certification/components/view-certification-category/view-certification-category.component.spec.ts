import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCertificationCategoryComponent } from './view-certification-category.component';

describe('ViewCertificationCategoryComponent', () => {
  let component: ViewCertificationCategoryComponent;
  let fixture: ComponentFixture<ViewCertificationCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewCertificationCategoryComponent]
    });
    fixture = TestBed.createComponent(ViewCertificationCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProductFeatureDetailComponent } from './new-product-feature-detail.component';

describe('NewProductFeatureDetailComponent', () => {
  let component: NewProductFeatureDetailComponent;
  let fixture: ComponentFixture<NewProductFeatureDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewProductFeatureDetailComponent]
    });
    fixture = TestBed.createComponent(NewProductFeatureDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBuyFormComponent } from './new-buy-form.component';

describe('NewBuyFormComponent', () => {
  let component: NewBuyFormComponent;
  let fixture: ComponentFixture<NewBuyFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewBuyFormComponent]
    });
    fixture = TestBed.createComponent(NewBuyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

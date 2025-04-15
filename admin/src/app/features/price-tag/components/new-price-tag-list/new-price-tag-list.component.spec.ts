import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPriceTagListComponent } from './new-price-tag-list.component';

describe('NewPriceTagListComponent', () => {
  let component: NewPriceTagListComponent;
  let fixture: ComponentFixture<NewPriceTagListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewPriceTagListComponent]
    });
    fixture = TestBed.createComponent(NewPriceTagListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

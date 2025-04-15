import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceTagListComponent } from './price-tag-list.component';

describe('PriceTagListComponent', () => {
  let component: PriceTagListComponent;
  let fixture: ComponentFixture<PriceTagListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PriceTagListComponent]
    });
    fixture = TestBed.createComponent(PriceTagListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPriceTagListComponent } from './view-price-tag-list.component';

describe('ViewPriceTagListComponent', () => {
  let component: ViewPriceTagListComponent;
  let fixture: ComponentFixture<ViewPriceTagListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewPriceTagListComponent]
    });
    fixture = TestBed.createComponent(ViewPriceTagListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

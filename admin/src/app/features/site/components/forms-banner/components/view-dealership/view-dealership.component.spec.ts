import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDealershipComponent } from './view-dealership.component';

describe('ViewDealershipComponent', () => {
  let component: ViewDealershipComponent;
  let fixture: ComponentFixture<ViewDealershipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewDealershipComponent]
    });
    fixture = TestBed.createComponent(ViewDealershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

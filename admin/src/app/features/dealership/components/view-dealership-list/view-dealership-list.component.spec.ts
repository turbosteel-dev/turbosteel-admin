import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDealershipListComponent } from './view-dealership-list.component';

describe('ViewDealershipListComponent', () => {
  let component: ViewDealershipListComponent;
  let fixture: ComponentFixture<ViewDealershipListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewDealershipListComponent]
    });
    fixture = TestBed.createComponent(ViewDealershipListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

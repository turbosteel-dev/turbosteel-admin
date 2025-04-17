import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDealershipComponent } from './new-dealership.component';

describe('NewDealershipComponent', () => {
  let component: NewDealershipComponent;
  let fixture: ComponentFixture<NewDealershipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewDealershipComponent]
    });
    fixture = TestBed.createComponent(NewDealershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

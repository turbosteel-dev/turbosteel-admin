import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInHouseDetailComponent } from './new-in-house-detail.component';

describe('NewInHouseDetailComponent', () => {
  let component: NewInHouseDetailComponent;
  let fixture: ComponentFixture<NewInHouseDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewInHouseDetailComponent]
    });
    fixture = TestBed.createComponent(NewInHouseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

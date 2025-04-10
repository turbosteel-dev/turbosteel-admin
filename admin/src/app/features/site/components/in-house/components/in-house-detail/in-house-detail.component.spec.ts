import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InHouseDetailComponent } from './in-house-detail.component';

describe('InHouseDetailComponent', () => {
  let component: InHouseDetailComponent;
  let fixture: ComponentFixture<InHouseDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InHouseDetailComponent]
    });
    fixture = TestBed.createComponent(InHouseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

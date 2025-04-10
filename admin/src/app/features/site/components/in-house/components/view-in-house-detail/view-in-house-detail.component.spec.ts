import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInHouseDetailComponent } from './view-in-house-detail.component';

describe('ViewInHouseDetailComponent', () => {
  let component: ViewInHouseDetailComponent;
  let fixture: ComponentFixture<ViewInHouseDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewInHouseDetailComponent]
    });
    fixture = TestBed.createComponent(ViewInHouseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

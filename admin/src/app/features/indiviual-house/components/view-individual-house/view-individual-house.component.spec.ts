import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewIndividualHouseComponent } from './view-individual-house.component';

describe('ViewIndividualHouseComponent', () => {
  let component: ViewIndividualHouseComponent;
  let fixture: ComponentFixture<ViewIndividualHouseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewIndividualHouseComponent]
    });
    fixture = TestBed.createComponent(ViewIndividualHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

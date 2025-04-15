import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualHouseListComponent } from './individual-house-list.component';

describe('IndividualHouseListComponent', () => {
  let component: IndividualHouseListComponent;
  let fixture: ComponentFixture<IndividualHouseListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndividualHouseListComponent]
    });
    fixture = TestBed.createComponent(IndividualHouseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiviualHouseComponent } from './indiviual-house.component';

describe('IndiviualHouseComponent', () => {
  let component: IndiviualHouseComponent;
  let fixture: ComponentFixture<IndiviualHouseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndiviualHouseComponent]
    });
    fixture = TestBed.createComponent(IndiviualHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

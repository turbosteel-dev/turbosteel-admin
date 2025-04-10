import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TubosteelAdvantageComponent } from './tubosteel-advantage.component';

describe('TubosteelAdvantageComponent', () => {
  let component: TubosteelAdvantageComponent;
  let fixture: ComponentFixture<TubosteelAdvantageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TubosteelAdvantageComponent]
    });
    fixture = TestBed.createComponent(TubosteelAdvantageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

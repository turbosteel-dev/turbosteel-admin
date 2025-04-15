import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasonsComponent } from './masons.component';

describe('MasonsComponent', () => {
  let component: MasonsComponent;
  let fixture: ComponentFixture<MasonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasonsComponent]
    });
    fixture = TestBed.createComponent(MasonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMasonsComponent } from './view-masons.component';

describe('ViewMasonsComponent', () => {
  let component: ViewMasonsComponent;
  let fixture: ComponentFixture<ViewMasonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewMasonsComponent]
    });
    fixture = TestBed.createComponent(ViewMasonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

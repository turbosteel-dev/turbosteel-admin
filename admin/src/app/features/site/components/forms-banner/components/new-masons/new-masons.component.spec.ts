import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMasonsComponent } from './new-masons.component';

describe('NewMasonsComponent', () => {
  let component: NewMasonsComponent;
  let fixture: ComponentFixture<NewMasonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewMasonsComponent]
    });
    fixture = TestBed.createComponent(NewMasonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

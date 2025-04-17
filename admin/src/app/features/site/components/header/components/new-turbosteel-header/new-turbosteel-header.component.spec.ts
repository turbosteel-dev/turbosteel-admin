import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTurbosteelHeaderComponent } from './new-turbosteel-header.component';

describe('NewTurbosteelHeaderComponent', () => {
  let component: NewTurbosteelHeaderComponent;
  let fixture: ComponentFixture<NewTurbosteelHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewTurbosteelHeaderComponent]
    });
    fixture = TestBed.createComponent(NewTurbosteelHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

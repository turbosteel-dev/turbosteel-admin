import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRegistrationHeaderComponent } from './new-registration-header.component';

describe('NewRegistrationHeaderComponent', () => {
  let component: NewRegistrationHeaderComponent;
  let fixture: ComponentFixture<NewRegistrationHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewRegistrationHeaderComponent]
    });
    fixture = TestBed.createComponent(NewRegistrationHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRegistrationHeaderComponent } from './view-registration-header.component';

describe('ViewRegistrationHeaderComponent', () => {
  let component: ViewRegistrationHeaderComponent;
  let fixture: ComponentFixture<ViewRegistrationHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewRegistrationHeaderComponent]
    });
    fixture = TestBed.createComponent(ViewRegistrationHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

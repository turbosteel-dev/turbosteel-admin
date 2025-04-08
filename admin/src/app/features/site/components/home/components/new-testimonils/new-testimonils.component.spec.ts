import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTestimonilsComponent } from './new-testimonils.component';

describe('NewTestimonilsComponent', () => {
  let component: NewTestimonilsComponent;
  let fixture: ComponentFixture<NewTestimonilsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewTestimonilsComponent]
    });
    fixture = TestBed.createComponent(NewTestimonilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewContactMapComponent } from './new-contact-map.component';

describe('NewContactMapComponent', () => {
  let component: NewContactMapComponent;
  let fixture: ComponentFixture<NewContactMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewContactMapComponent]
    });
    fixture = TestBed.createComponent(NewContactMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

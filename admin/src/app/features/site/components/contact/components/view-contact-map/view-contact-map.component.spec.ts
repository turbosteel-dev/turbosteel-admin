import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewContactMapComponent } from './view-contact-map.component';

describe('ViewContactMapComponent', () => {
  let component: ViewContactMapComponent;
  let fixture: ComponentFixture<ViewContactMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewContactMapComponent]
    });
    fixture = TestBed.createComponent(ViewContactMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewArchitectsComponent } from './view-architects.component';

describe('ViewArchitectsComponent', () => {
  let component: ViewArchitectsComponent;
  let fixture: ComponentFixture<ViewArchitectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewArchitectsComponent]
    });
    fixture = TestBed.createComponent(ViewArchitectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

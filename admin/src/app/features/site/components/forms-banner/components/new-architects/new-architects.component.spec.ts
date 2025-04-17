import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewArchitectsComponent } from './new-architects.component';

describe('NewArchitectsComponent', () => {
  let component: NewArchitectsComponent;
  let fixture: ComponentFixture<NewArchitectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewArchitectsComponent]
    });
    fixture = TestBed.createComponent(NewArchitectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

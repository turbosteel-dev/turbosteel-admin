import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTechnologyListComponent } from './new-technology-list.component';

describe('NewTechnologyListComponent', () => {
  let component: NewTechnologyListComponent;
  let fixture: ComponentFixture<NewTechnologyListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewTechnologyListComponent]
    });
    fixture = TestBed.createComponent(NewTechnologyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

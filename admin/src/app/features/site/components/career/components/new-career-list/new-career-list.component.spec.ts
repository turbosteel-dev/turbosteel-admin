import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCareerListComponent } from './new-career-list.component';

describe('NewCareerListComponent', () => {
  let component: NewCareerListComponent;
  let fixture: ComponentFixture<NewCareerListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewCareerListComponent]
    });
    fixture = TestBed.createComponent(NewCareerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAboutListComponent } from './new-about-list.component';

describe('NewAboutListComponent', () => {
  let component: NewAboutListComponent;
  let fixture: ComponentFixture<NewAboutListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewAboutListComponent]
    });
    fixture = TestBed.createComponent(NewAboutListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

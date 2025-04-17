import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAboutHeaderComponent } from './new-about-header.component';

describe('NewAboutHeaderComponent', () => {
  let component: NewAboutHeaderComponent;
  let fixture: ComponentFixture<NewAboutHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewAboutHeaderComponent]
    });
    fixture = TestBed.createComponent(NewAboutHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

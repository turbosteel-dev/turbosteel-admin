import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAboutDetailComponent } from './new-about-detail.component';

describe('NewAboutDetailComponent', () => {
  let component: NewAboutDetailComponent;
  let fixture: ComponentFixture<NewAboutDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewAboutDetailComponent]
    });
    fixture = TestBed.createComponent(NewAboutDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

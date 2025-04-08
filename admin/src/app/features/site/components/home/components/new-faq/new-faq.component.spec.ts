import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFaqComponent } from './new-faq.component';

describe('NewFaqComponent', () => {
  let component: NewFaqComponent;
  let fixture: ComponentFixture<NewFaqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewFaqComponent]
    });
    fixture = TestBed.createComponent(NewFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

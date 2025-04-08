import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFaqComponent } from './view-faq.component';

describe('ViewFaqComponent', () => {
  let component: ViewFaqComponent;
  let fixture: ComponentFixture<ViewFaqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewFaqComponent]
    });
    fixture = TestBed.createComponent(ViewFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

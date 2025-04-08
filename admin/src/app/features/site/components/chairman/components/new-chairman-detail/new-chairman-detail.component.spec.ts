import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewChairmanDetailComponent } from './new-chairman-detail.component';

describe('NewChairmanDetailComponent', () => {
  let component: NewChairmanDetailComponent;
  let fixture: ComponentFixture<NewChairmanDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewChairmanDetailComponent]
    });
    fixture = TestBed.createComponent(NewChairmanDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

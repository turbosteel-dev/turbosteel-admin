import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMProcessDetailComponent } from './new-m-process-detail.component';

describe('NewMProcessDetailComponent', () => {
  let component: NewMProcessDetailComponent;
  let fixture: ComponentFixture<NewMProcessDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewMProcessDetailComponent]
    });
    fixture = TestBed.createComponent(NewMProcessDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCuttingedgeDetailComponent } from './new-cuttingedge-detail.component';

describe('NewCuttingedgeDetailComponent', () => {
  let component: NewCuttingedgeDetailComponent;
  let fixture: ComponentFixture<NewCuttingedgeDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewCuttingedgeDetailComponent]
    });
    fixture = TestBed.createComponent(NewCuttingedgeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

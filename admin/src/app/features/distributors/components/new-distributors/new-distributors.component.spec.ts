import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDistributorsComponent } from './new-distributors.component';

describe('NewDistributorsComponent', () => {
  let component: NewDistributorsComponent;
  let fixture: ComponentFixture<NewDistributorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewDistributorsComponent]
    });
    fixture = TestBed.createComponent(NewDistributorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDistributorsComponent } from './view-distributors.component';

describe('ViewDistributorsComponent', () => {
  let component: ViewDistributorsComponent;
  let fixture: ComponentFixture<ViewDistributorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewDistributorsComponent]
    });
    fixture = TestBed.createComponent(ViewDistributorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

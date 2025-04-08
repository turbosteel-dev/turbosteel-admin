import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewErmDetailComponent } from './view-erm-detail.component';

describe('ViewErmDetailComponent', () => {
  let component: ViewErmDetailComponent;
  let fixture: ComponentFixture<ViewErmDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewErmDetailComponent]
    });
    fixture = TestBed.createComponent(ViewErmDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

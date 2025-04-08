import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChairmanDetailComponent } from './view-chairman-detail.component';

describe('ViewChairmanDetailComponent', () => {
  let component: ViewChairmanDetailComponent;
  let fixture: ComponentFixture<ViewChairmanDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewChairmanDetailComponent]
    });
    fixture = TestBed.createComponent(ViewChairmanDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTurbosteelHeaderComponent } from './view-turbosteel-header.component';

describe('ViewTurbosteelHeaderComponent', () => {
  let component: ViewTurbosteelHeaderComponent;
  let fixture: ComponentFixture<ViewTurbosteelHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewTurbosteelHeaderComponent]
    });
    fixture = TestBed.createComponent(ViewTurbosteelHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMasonsListComponent } from './view-masons-list.component';

describe('ViewMasonsListComponent', () => {
  let component: ViewMasonsListComponent;
  let fixture: ComponentFixture<ViewMasonsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewMasonsListComponent]
    });
    fixture = TestBed.createComponent(ViewMasonsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

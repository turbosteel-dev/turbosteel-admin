import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewArchitectListComponent } from './view-architect-list.component';

describe('ViewArchitectListComponent', () => {
  let component: ViewArchitectListComponent;
  let fixture: ComponentFixture<ViewArchitectListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewArchitectListComponent]
    });
    fixture = TestBed.createComponent(ViewArchitectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

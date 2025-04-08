import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVisionListComponent } from './view-vision-list.component';

describe('ViewVisionListComponent', () => {
  let component: ViewVisionListComponent;
  let fixture: ComponentFixture<ViewVisionListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewVisionListComponent]
    });
    fixture = TestBed.createComponent(ViewVisionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCuttingedgeDetailComponent } from './view-cuttingedge-detail.component';

describe('ViewCuttingedgeDetailComponent', () => {
  let component: ViewCuttingedgeDetailComponent;
  let fixture: ComponentFixture<ViewCuttingedgeDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewCuttingedgeDetailComponent]
    });
    fixture = TestBed.createComponent(ViewCuttingedgeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

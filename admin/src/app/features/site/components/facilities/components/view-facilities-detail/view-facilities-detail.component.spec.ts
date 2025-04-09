import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFacilitiesDetailComponent } from './view-facilities-detail.component';

describe('ViewFacilitiesDetailComponent', () => {
  let component: ViewFacilitiesDetailComponent;
  let fixture: ComponentFixture<ViewFacilitiesDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewFacilitiesDetailComponent]
    });
    fixture = TestBed.createComponent(ViewFacilitiesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

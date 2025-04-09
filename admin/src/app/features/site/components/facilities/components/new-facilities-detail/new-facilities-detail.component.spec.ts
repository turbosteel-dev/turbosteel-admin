import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFacilitiesDetailComponent } from './new-facilities-detail.component';

describe('NewFacilitiesDetailComponent', () => {
  let component: NewFacilitiesDetailComponent;
  let fixture: ComponentFixture<NewFacilitiesDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewFacilitiesDetailComponent]
    });
    fixture = TestBed.createComponent(NewFacilitiesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCertificationDetailComponent } from './view-certification-detail.component';

describe('ViewCertificationDetailComponent', () => {
  let component: ViewCertificationDetailComponent;
  let fixture: ComponentFixture<ViewCertificationDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewCertificationDetailComponent]
    });
    fixture = TestBed.createComponent(ViewCertificationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

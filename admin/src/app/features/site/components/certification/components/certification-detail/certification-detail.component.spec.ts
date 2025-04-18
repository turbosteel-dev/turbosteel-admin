import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationDetailComponent } from './certification-detail.component';

describe('CertificationDetailComponent', () => {
  let component: CertificationDetailComponent;
  let fixture: ComponentFixture<CertificationDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CertificationDetailComponent]
    });
    fixture = TestBed.createComponent(CertificationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

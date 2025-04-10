import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCertificationDetailComponent } from './new-certification-detail.component';

describe('NewCertificationDetailComponent', () => {
  let component: NewCertificationDetailComponent;
  let fixture: ComponentFixture<NewCertificationDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewCertificationDetailComponent]
    });
    fixture = TestBed.createComponent(NewCertificationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

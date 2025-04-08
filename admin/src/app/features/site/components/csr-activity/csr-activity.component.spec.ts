import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsrActivityComponent } from './csr-activity.component';

describe('CsrActivityComponent', () => {
  let component: CsrActivityComponent;
  let fixture: ComponentFixture<CsrActivityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CsrActivityComponent]
    });
    fixture = TestBed.createComponent(CsrActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

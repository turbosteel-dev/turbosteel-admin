import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsrImageComponent } from './csr-image.component';

describe('CsrImageComponent', () => {
  let component: CsrImageComponent;
  let fixture: ComponentFixture<CsrImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CsrImageComponent]
    });
    fixture = TestBed.createComponent(CsrImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

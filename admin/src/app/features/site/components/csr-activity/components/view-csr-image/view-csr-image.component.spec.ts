import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCsrImageComponent } from './view-csr-image.component';

describe('ViewCsrImageComponent', () => {
  let component: ViewCsrImageComponent;
  let fixture: ComponentFixture<ViewCsrImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewCsrImageComponent]
    });
    fixture = TestBed.createComponent(ViewCsrImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

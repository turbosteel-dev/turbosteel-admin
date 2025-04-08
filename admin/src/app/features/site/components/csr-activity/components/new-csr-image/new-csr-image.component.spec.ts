import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCsrImageComponent } from './new-csr-image.component';

describe('NewCsrImageComponent', () => {
  let component: NewCsrImageComponent;
  let fixture: ComponentFixture<NewCsrImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewCsrImageComponent]
    });
    fixture = TestBed.createComponent(NewCsrImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

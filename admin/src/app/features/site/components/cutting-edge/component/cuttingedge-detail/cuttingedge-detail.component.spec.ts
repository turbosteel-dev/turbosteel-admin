import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuttingedgeDetailComponent } from './cuttingedge-detail.component';

describe('CuttingedgeDetailComponent', () => {
  let component: CuttingedgeDetailComponent;
  let fixture: ComponentFixture<CuttingedgeDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuttingedgeDetailComponent]
    });
    fixture = TestBed.createComponent(CuttingedgeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

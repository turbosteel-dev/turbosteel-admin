import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MProcessDetailComponent } from './m-process-detail.component';

describe('MProcessDetailComponent', () => {
  let component: MProcessDetailComponent;
  let fixture: ComponentFixture<MProcessDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MProcessDetailComponent]
    });
    fixture = TestBed.createComponent(MProcessDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

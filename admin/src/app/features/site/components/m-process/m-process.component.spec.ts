import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MProcessComponent } from './m-process.component';

describe('MProcessComponent', () => {
  let component: MProcessComponent;
  let fixture: ComponentFixture<MProcessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MProcessComponent]
    });
    fixture = TestBed.createComponent(MProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

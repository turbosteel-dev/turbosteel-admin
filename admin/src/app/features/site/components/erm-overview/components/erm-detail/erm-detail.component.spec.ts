import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErmDetailComponent } from './erm-detail.component';

describe('ErmDetailComponent', () => {
  let component: ErmDetailComponent;
  let fixture: ComponentFixture<ErmDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErmDetailComponent]
    });
    fixture = TestBed.createComponent(ErmDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

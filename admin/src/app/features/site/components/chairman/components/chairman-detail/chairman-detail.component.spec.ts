import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChairmanDetailComponent } from './chairman-detail.component';

describe('ChairmanDetailComponent', () => {
  let component: ChairmanDetailComponent;
  let fixture: ComponentFixture<ChairmanDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChairmanDetailComponent]
    });
    fixture = TestBed.createComponent(ChairmanDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

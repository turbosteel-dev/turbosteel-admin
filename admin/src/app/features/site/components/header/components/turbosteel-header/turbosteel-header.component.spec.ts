import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurbosteelHeaderComponent } from './turbosteel-header.component';

describe('TurbosteelHeaderComponent', () => {
  let component: TurbosteelHeaderComponent;
  let fixture: ComponentFixture<TurbosteelHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TurbosteelHeaderComponent]
    });
    fixture = TestBed.createComponent(TurbosteelHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

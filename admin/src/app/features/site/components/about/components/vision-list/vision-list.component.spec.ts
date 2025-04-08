import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisionListComponent } from './vision-list.component';

describe('VisionListComponent', () => {
  let component: VisionListComponent;
  let fixture: ComponentFixture<VisionListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisionListComponent]
    });
    fixture = TestBed.createComponent(VisionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

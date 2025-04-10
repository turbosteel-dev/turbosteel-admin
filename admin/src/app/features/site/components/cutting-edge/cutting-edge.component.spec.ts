import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuttingEdgeComponent } from './cutting-edge.component';

describe('CuttingEdgeComponent', () => {
  let component: CuttingEdgeComponent;
  let fixture: ComponentFixture<CuttingEdgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuttingEdgeComponent]
    });
    fixture = TestBed.createComponent(CuttingEdgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

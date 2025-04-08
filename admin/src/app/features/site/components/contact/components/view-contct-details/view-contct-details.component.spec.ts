import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewContctDetailsComponent } from './view-contct-details.component';

describe('ViewContctDetailsComponent', () => {
  let component: ViewContctDetailsComponent;
  let fixture: ComponentFixture<ViewContctDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewContctDetailsComponent]
    });
    fixture = TestBed.createComponent(ViewContctDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

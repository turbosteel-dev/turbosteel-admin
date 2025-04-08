import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFooterComponent } from './view-footer.component';

describe('ViewFooterComponent', () => {
  let component: ViewFooterComponent;
  let fixture: ComponentFixture<ViewFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewFooterComponent]
    });
    fixture = TestBed.createComponent(ViewFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

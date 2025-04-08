import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewQuickLinksComponent } from './view-quick-links.component';

describe('ViewQuickLinksComponent', () => {
  let component: ViewQuickLinksComponent;
  let fixture: ComponentFixture<ViewQuickLinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewQuickLinksComponent]
    });
    fixture = TestBed.createComponent(ViewQuickLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

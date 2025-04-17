import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAboutHeaderComponent } from './view-about-header.component';

describe('ViewAboutHeaderComponent', () => {
  let component: ViewAboutHeaderComponent;
  let fixture: ComponentFixture<ViewAboutHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAboutHeaderComponent]
    });
    fixture = TestBed.createComponent(ViewAboutHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

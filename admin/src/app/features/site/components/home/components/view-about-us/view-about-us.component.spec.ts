import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAboutUsComponent } from './view-about-us.component';

describe('ViewAboutUsComponent', () => {
  let component: ViewAboutUsComponent;
  let fixture: ComponentFixture<ViewAboutUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAboutUsComponent]
    });
    fixture = TestBed.createComponent(ViewAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

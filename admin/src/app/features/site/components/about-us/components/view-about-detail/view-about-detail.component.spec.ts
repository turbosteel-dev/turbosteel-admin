import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAboutDetailComponent } from './view-about-detail.component';

describe('ViewAboutDetailComponent', () => {
  let component: ViewAboutDetailComponent;
  let fixture: ComponentFixture<ViewAboutDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAboutDetailComponent]
    });
    fixture = TestBed.createComponent(ViewAboutDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

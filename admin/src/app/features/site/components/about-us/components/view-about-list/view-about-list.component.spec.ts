import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAboutListComponent } from './view-about-list.component';

describe('ViewAboutListComponent', () => {
  let component: ViewAboutListComponent;
  let fixture: ComponentFixture<ViewAboutListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAboutListComponent]
    });
    fixture = TestBed.createComponent(ViewAboutListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

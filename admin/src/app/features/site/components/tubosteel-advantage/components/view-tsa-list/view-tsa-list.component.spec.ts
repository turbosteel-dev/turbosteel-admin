import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTsaListComponent } from './view-tsa-list.component';

describe('ViewTsaListComponent', () => {
  let component: ViewTsaListComponent;
  let fixture: ComponentFixture<ViewTsaListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewTsaListComponent]
    });
    fixture = TestBed.createComponent(ViewTsaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

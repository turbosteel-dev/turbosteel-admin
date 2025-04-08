import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewErmDetailComponent } from './new-erm-detail.component';

describe('NewErmDetailComponent', () => {
  let component: NewErmDetailComponent;
  let fixture: ComponentFixture<NewErmDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewErmDetailComponent]
    });
    fixture = TestBed.createComponent(NewErmDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

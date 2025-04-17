import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasonsListComponent } from './masons-list.component';

describe('MasonsListComponent', () => {
  let component: MasonsListComponent;
  let fixture: ComponentFixture<MasonsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasonsListComponent]
    });
    fixture = TestBed.createComponent(MasonsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

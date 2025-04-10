import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTsaListComponent } from './new-tsa-list.component';

describe('NewTsaListComponent', () => {
  let component: NewTsaListComponent;
  let fixture: ComponentFixture<NewTsaListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewTsaListComponent]
    });
    fixture = TestBed.createComponent(NewTsaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

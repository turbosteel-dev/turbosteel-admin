import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVisionListComponent } from './new-vision-list.component';

describe('NewVisionListComponent', () => {
  let component: NewVisionListComponent;
  let fixture: ComponentFixture<NewVisionListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewVisionListComponent]
    });
    fixture = TestBed.createComponent(NewVisionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

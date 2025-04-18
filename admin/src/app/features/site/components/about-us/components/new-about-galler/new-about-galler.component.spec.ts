import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAboutGallerComponent } from './new-about-galler.component';

describe('NewAboutGallerComponent', () => {
  let component: NewAboutGallerComponent;
  let fixture: ComponentFixture<NewAboutGallerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewAboutGallerComponent]
    });
    fixture = TestBed.createComponent(NewAboutGallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

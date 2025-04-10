import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTsaBannerComponent } from './new-tsa-banner.component';

describe('NewTsaBannerComponent', () => {
  let component: NewTsaBannerComponent;
  let fixture: ComponentFixture<NewTsaBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewTsaBannerComponent]
    });
    fixture = TestBed.createComponent(NewTsaBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

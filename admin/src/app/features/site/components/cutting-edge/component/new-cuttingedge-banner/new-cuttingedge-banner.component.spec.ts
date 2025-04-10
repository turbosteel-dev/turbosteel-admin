import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCuttingedgeBannerComponent } from './new-cuttingedge-banner.component';

describe('NewCuttingedgeBannerComponent', () => {
  let component: NewCuttingedgeBannerComponent;
  let fixture: ComponentFixture<NewCuttingedgeBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewCuttingedgeBannerComponent]
    });
    fixture = TestBed.createComponent(NewCuttingedgeBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

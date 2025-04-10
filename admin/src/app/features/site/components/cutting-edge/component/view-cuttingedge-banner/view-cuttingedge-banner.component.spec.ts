import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCuttingedgeBannerComponent } from './view-cuttingedge-banner.component';

describe('ViewCuttingedgeBannerComponent', () => {
  let component: ViewCuttingedgeBannerComponent;
  let fixture: ComponentFixture<ViewCuttingedgeBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewCuttingedgeBannerComponent]
    });
    fixture = TestBed.createComponent(ViewCuttingedgeBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

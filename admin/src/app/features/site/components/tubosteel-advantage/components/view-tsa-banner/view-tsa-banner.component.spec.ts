import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTsaBannerComponent } from './view-tsa-banner.component';

describe('ViewTsaBannerComponent', () => {
  let component: ViewTsaBannerComponent;
  let fixture: ComponentFixture<ViewTsaBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewTsaBannerComponent]
    });
    fixture = TestBed.createComponent(ViewTsaBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

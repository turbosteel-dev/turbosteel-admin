import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChairmanBannerComponent } from './chairman-banner.component';

describe('ChairmanBannerComponent', () => {
  let component: ChairmanBannerComponent;
  let fixture: ComponentFixture<ChairmanBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChairmanBannerComponent]
    });
    fixture = TestBed.createComponent(ChairmanBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuttingedgeBannerComponent } from './cuttingedge-banner.component';

describe('CuttingedgeBannerComponent', () => {
  let component: CuttingedgeBannerComponent;
  let fixture: ComponentFixture<CuttingedgeBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuttingedgeBannerComponent]
    });
    fixture = TestBed.createComponent(CuttingedgeBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

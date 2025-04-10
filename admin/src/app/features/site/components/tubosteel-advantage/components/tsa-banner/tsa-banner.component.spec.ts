import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsaBannerComponent } from './tsa-banner.component';

describe('TsaBannerComponent', () => {
  let component: TsaBannerComponent;
  let fixture: ComponentFixture<TsaBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TsaBannerComponent]
    });
    fixture = TestBed.createComponent(TsaBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

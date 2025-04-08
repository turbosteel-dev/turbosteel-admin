import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewErmBannerComponent } from './new-erm-banner.component';

describe('NewErmBannerComponent', () => {
  let component: NewErmBannerComponent;
  let fixture: ComponentFixture<NewErmBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewErmBannerComponent]
    });
    fixture = TestBed.createComponent(NewErmBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

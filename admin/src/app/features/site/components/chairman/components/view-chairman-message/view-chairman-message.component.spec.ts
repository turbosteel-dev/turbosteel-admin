import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChairmanMessageComponent } from './view-chairman-message.component';

describe('ViewChairmanMessageComponent', () => {
  let component: ViewChairmanMessageComponent;
  let fixture: ComponentFixture<ViewChairmanMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewChairmanMessageComponent]
    });
    fixture = TestBed.createComponent(ViewChairmanMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

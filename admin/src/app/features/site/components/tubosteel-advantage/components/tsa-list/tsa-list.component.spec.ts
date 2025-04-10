import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsaListComponent } from './tsa-list.component';

describe('TsaListComponent', () => {
  let component: TsaListComponent;
  let fixture: ComponentFixture<TsaListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TsaListComponent]
    });
    fixture = TestBed.createComponent(TsaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

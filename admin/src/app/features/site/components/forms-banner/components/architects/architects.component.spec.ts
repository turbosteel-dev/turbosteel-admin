import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchitectsComponent } from './architects.component';

describe('ArchitectsComponent', () => {
  let component: ArchitectsComponent;
  let fixture: ComponentFixture<ArchitectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArchitectsComponent]
    });
    fixture = TestBed.createComponent(ArchitectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

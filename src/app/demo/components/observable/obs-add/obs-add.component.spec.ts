import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsAddComponent } from './obs-add.component';

describe('ObsAddComponent', () => {
  let component: ObsAddComponent;
  let fixture: ComponentFixture<ObsAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObsAddComponent]
    });
    fixture = TestBed.createComponent(ObsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

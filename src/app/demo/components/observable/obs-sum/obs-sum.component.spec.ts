import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsSumComponent } from './obs-sum.component';

describe('ObsSumComponent', () => {
  let component: ObsSumComponent;
  let fixture: ComponentFixture<ObsSumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObsSumComponent]
    });
    fixture = TestBed.createComponent(ObsSumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

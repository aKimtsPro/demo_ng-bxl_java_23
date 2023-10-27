import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeHeaderComponent } from './prime-header.component';

describe('PrimeHeaderComponent', () => {
  let component: PrimeHeaderComponent;
  let fixture: ComponentFixture<PrimeHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrimeHeaderComponent]
    });
    fixture = TestBed.createComponent(PrimeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

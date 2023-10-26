import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommComponent } from './comm.component';

describe('CommComponent', () => {
  let component: CommComponent;
  let fixture: ComponentFixture<CommComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommComponent]
    });
    fixture = TestBed.createComponent(CommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pago1Component } from './pago1.component';

describe('Pago1Component', () => {
  let component: Pago1Component;
  let fixture: ComponentFixture<Pago1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pago1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pago1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

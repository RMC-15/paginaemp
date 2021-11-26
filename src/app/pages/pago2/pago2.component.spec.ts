import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pago2Component } from './pago2.component';

describe('Pago2Component', () => {
  let component: Pago2Component;
  let fixture: ComponentFixture<Pago2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pago2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pago2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

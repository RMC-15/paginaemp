import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pago3Component } from './pago3.component';

describe('Pago3Component', () => {
  let component: Pago3Component;
  let fixture: ComponentFixture<Pago3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pago3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pago3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

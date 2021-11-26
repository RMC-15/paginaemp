import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Empeno3Component } from './empeno3.component';

describe('Empeno3Component', () => {
  let component: Empeno3Component;
  let fixture: ComponentFixture<Empeno3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Empeno3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Empeno3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

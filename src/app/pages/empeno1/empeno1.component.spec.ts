import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Empeno1Component } from './empeno1.component';

describe('Empeno1Component', () => {
  let component: Empeno1Component;
  let fixture: ComponentFixture<Empeno1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Empeno1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Empeno1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

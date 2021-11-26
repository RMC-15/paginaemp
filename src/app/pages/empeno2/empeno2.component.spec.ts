import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Empeno2Component } from './empeno2.component';

describe('Empeno2Component', () => {
  let component: Empeno2Component;
  let fixture: ComponentFixture<Empeno2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Empeno2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Empeno2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

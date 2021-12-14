import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpenodstComponent } from './empenodst.component';

describe('EmpenodstComponent', () => {
  let component: EmpenodstComponent;
  let fixture: ComponentFixture<EmpenodstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpenodstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpenodstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

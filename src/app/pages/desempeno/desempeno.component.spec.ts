import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesempenoComponent } from './desempeno.component';

describe('DesempenoComponent', () => {
  let component: DesempenoComponent;
  let fixture: ComponentFixture<DesempenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesempenoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesempenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

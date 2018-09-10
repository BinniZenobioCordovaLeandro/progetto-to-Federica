import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedaEcocolorDopplerVasiColloComponent } from './scheda-ecocolor-doppler-vasi-collo.component';

describe('SchedaEcocolorDopplerVasiColloComponent', () => {
  let component: SchedaEcocolorDopplerVasiColloComponent;
  let fixture: ComponentFixture<SchedaEcocolorDopplerVasiColloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedaEcocolorDopplerVasiColloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedaEcocolorDopplerVasiColloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

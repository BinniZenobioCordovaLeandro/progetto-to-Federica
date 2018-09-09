import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedaVisitaChirurgicaVascolare2Component } from './scheda-visita-chirurgica-vascolare2.component';

describe('SchedaVisitaChirurgicaVascolare2Component', () => {
  let component: SchedaVisitaChirurgicaVascolare2Component;
  let fixture: ComponentFixture<SchedaVisitaChirurgicaVascolare2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedaVisitaChirurgicaVascolare2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedaVisitaChirurgicaVascolare2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

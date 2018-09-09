import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedaVisitaChirurgicaVascolareComponent } from './scheda-visita-chirurgica-vascolare.component';

describe('SchedaVisitaChirurgicaVascolareComponent', () => {
  let component: SchedaVisitaChirurgicaVascolareComponent;
  let fixture: ComponentFixture<SchedaVisitaChirurgicaVascolareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedaVisitaChirurgicaVascolareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedaVisitaChirurgicaVascolareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedaVisitaChirurgiaToracicaComponent } from './scheda-visita-chirurgia-toracica.component';

describe('SchedaVisitaChirurgiaToracicaComponent', () => {
  let component: SchedaVisitaChirurgiaToracicaComponent;
  let fixture: ComponentFixture<SchedaVisitaChirurgiaToracicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedaVisitaChirurgiaToracicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedaVisitaChirurgiaToracicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

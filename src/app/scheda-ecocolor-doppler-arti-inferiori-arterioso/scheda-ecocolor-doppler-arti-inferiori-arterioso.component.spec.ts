import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedaEcocolorDopplerArtiInferioriArteriosoComponent } from './scheda-ecocolor-doppler-arti-inferiori-arterioso.component';

describe('SchedaEcocolorDopplerArtiInferioriArteriosoComponent', () => {
  let component: SchedaEcocolorDopplerArtiInferioriArteriosoComponent;
  let fixture: ComponentFixture<SchedaEcocolorDopplerArtiInferioriArteriosoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedaEcocolorDopplerArtiInferioriArteriosoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedaEcocolorDopplerArtiInferioriArteriosoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

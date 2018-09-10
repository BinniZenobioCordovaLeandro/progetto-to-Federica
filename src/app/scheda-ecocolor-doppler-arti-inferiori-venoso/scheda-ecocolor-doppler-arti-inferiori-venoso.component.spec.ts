import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedaEcocolorDopplerArtiInferioriVenosoComponent } from './scheda-ecocolor-doppler-arti-inferiori-venoso.component';

describe('SchedaEcocolorDopplerArtiInferioriVenosoComponent', () => {
  let component: SchedaEcocolorDopplerArtiInferioriVenosoComponent;
  let fixture: ComponentFixture<SchedaEcocolorDopplerArtiInferioriVenosoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedaEcocolorDopplerArtiInferioriVenosoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedaEcocolorDopplerArtiInferioriVenosoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

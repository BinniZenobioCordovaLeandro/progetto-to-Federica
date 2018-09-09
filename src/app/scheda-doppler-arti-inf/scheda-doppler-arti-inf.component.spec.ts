import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedaDopplerArtiInfComponent } from './scheda-doppler-arti-inf.component';

describe('SchedaDopplerArtiInfComponent', () => {
  let component: SchedaDopplerArtiInfComponent;
  let fixture: ComponentFixture<SchedaDopplerArtiInfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedaDopplerArtiInfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedaDopplerArtiInfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

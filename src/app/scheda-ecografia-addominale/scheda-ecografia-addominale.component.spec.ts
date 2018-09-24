import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedaEcografiaAddominaleComponent } from './scheda-ecografia-addominale.component';

describe('SchedaEcografiaAddominaleComponent', () => {
  let component: SchedaEcografiaAddominaleComponent;
  let fixture: ComponentFixture<SchedaEcografiaAddominaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedaEcografiaAddominaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedaEcografiaAddominaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

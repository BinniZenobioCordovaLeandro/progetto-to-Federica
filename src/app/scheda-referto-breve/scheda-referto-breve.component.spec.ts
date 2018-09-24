import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedaRefertoBreveComponent } from './scheda-referto-breve.component';

describe('SchedaRefertoBreveComponent', () => {
  let component: SchedaRefertoBreveComponent;
  let fixture: ComponentFixture<SchedaRefertoBreveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedaRefertoBreveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedaRefertoBreveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

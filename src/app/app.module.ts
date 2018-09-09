import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SchedaVisitaChirurgicaVascolareComponent } from './scheda-visita-chirurgica-vascolare/scheda-visita-chirurgica-vascolare.component';
import { DizionarioComponent } from './dizionario/dizionario.component';
import { SchedaVisitaChirurgiaToracicaComponent } from './scheda-visita-chirurgia-toracica/scheda-visita-chirurgia-toracica.component';
import { SchedaDopplerArtiInfComponent } from './scheda-doppler-arti-inf/scheda-doppler-arti-inf.component';
import { SchedaVisitaChirurgicaVascolare2Component } from './scheda-visita-chirurgica-vascolare2/scheda-visita-chirurgica-vascolare2.component';

@NgModule({
  declarations: [
    AppComponent,
    SchedaVisitaChirurgicaVascolareComponent,
    DizionarioComponent,
    SchedaVisitaChirurgiaToracicaComponent,
    SchedaDopplerArtiInfComponent,
    SchedaVisitaChirurgicaVascolare2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

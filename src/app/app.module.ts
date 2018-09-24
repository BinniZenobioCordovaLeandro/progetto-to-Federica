import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SchedaVisitaChirurgicaVascolareComponent } from './scheda-visita-chirurgica-vascolare/scheda-visita-chirurgica-vascolare.component';
import { DizionarioComponent } from './dizionario/dizionario.component';
import { SchedaVisitaChirurgiaToracicaComponent } from './scheda-visita-chirurgia-toracica/scheda-visita-chirurgia-toracica.component';
import { SchedaDopplerArtiInfComponent } from './scheda-doppler-arti-inf/scheda-doppler-arti-inf.component';
import { SchedaVisitaChirurgicaVascolare2Component } from './scheda-visita-chirurgica-vascolare2/scheda-visita-chirurgica-vascolare2.component';
import { SchedaEcocolorDopplerArtiInferioriVenosoComponent } from './scheda-ecocolor-doppler-arti-inferiori-venoso/scheda-ecocolor-doppler-arti-inferiori-venoso.component';
import { SchedaEcocolorDopplerArtiInferioriArteriosoComponent } from './scheda-ecocolor-doppler-arti-inferiori-arterioso/scheda-ecocolor-doppler-arti-inferiori-arterioso.component';
import { SchedaEcocolorDopplerVasiColloComponent } from './scheda-ecocolor-doppler-vasi-collo/scheda-ecocolor-doppler-vasi-collo.component';
import { SchedaEcografiaAddominaleComponent } from './scheda-ecografia-addominale/scheda-ecografia-addominale.component';
import { SchedaRefertoBreveComponent } from './scheda-referto-breve/scheda-referto-breve.component';

@NgModule({
  declarations: [
    AppComponent,
    SchedaVisitaChirurgicaVascolareComponent,
    DizionarioComponent,
    SchedaVisitaChirurgiaToracicaComponent,
    SchedaDopplerArtiInfComponent,
    SchedaVisitaChirurgicaVascolare2Component,
    SchedaEcocolorDopplerArtiInferioriVenosoComponent,
    SchedaEcocolorDopplerArtiInferioriArteriosoComponent,
    SchedaEcocolorDopplerVasiColloComponent,
    SchedaEcografiaAddominaleComponent,
    SchedaRefertoBreveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

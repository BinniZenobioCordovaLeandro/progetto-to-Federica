function iniziaBozza(){
  if(!formData.schedaVisitaChirurgicaVascolare2){
    formData.schedaVisitaChirurgicaVascolare2 = {
      anamnesi : null,
        famigliarita : 0,
        adiposita : 0,
        gravidanze : 0,
      allergie : null,
      disturbi : null,
      esame : null,
      diagnosi : null,
      consigli : null
    };
    if(initData){
      formData.schedaVisitaChirurgicaVascolare2.anamnesi = "";
      formData.schedaVisitaChirurgicaVascolare2.allergie = "";
      formData.schedaVisitaChirurgicaVascolare2.disturbi = "";
      formData.schedaVisitaChirurgicaVascolare2.esame = "";
      formData.schedaVisitaChirurgicaVascolare2.diagnosi = "";
    }
  }
}
iniziaBozza();

function inizioBozza(){
  if(!formData.schedaVisitaChirurgicaToracica){
    formData.schedaVisitaChirurgicaToracica = {
      anamnsei : null,
      fattori : null,
      allergie : null,
      disturbi : null,
      esame : null,
      diagnose : null,
      consigli : null
    };
    if(initData){
      formData.schedaVisitaChirurgicaToracica.anamnesi = "";
      formData.schedaVisitaChirurgicaToracica.fattori = "";
      formData.schedaVisitaChirurgicaToracica.allergie = "";
      formData.schedaVisitaChirurgicaToracica.disturbi = "";
      formData.schedaVisitaChirurgicaToracica.esame = "";
      formData.schedaVisitaChirurgicaToracica.diagnose = "";
      formData.schedaVisitaChirurgicaToracica.consigli = "";
    }
  }
}
inizioBozza();

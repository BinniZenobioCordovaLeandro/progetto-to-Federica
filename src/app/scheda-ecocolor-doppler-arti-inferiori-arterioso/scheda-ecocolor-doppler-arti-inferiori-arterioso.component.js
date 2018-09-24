function iniziaBozza(){
  if(!formData.schedaEcocolorDopplerArtiInferioriVenoso){
    formData.schedaEcocolorDopplerArtiInferioriVenoso = {
      quesito : null,
      conclusioni : null
      img{
        chk_1 : false;
        chk_2 : false;
        chk_3 : false;
        chk_4 : false;
      }
    };
    if (initData) {
      formData.schedaEcocolorDopplerArtiInferioriVenoso.quesito = null;
      formData.schedaEcocolorDopplerArtiInferioriVenoso.conclusioni = null;
    }
  }
}
iniziaBozza();

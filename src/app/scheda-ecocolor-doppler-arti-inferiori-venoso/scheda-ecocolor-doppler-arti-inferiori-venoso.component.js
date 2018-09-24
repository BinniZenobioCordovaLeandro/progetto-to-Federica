function iniziaBozza(){
  if(!formData.schedaEcocolorDopplerArtiInferioriVenoso){
    formData.schedaEcocolorDopplerArtiInferioriVenoso = {
      quesito : null,
      sistema : null,
      crosseVsm : null,
      crosseVsp : null,
      vsm : null,
      vsp : null,
      vene : null,
      altro : null
    };
    if(initData){
      formData.schedaEcocolorDopplerArtiInferioriVenoso.quesito = null;
      formData.schedaEcocolorDopplerArtiInferioriVenoso.sistema = null;
      formData.schedaEcocolorDopplerArtiInferioriVenoso.crosseVsm = null;
      formData.schedaEcocolorDopplerArtiInferioriVenoso.crosseVsp = null;
      formData.schedaEcocolorDopplerArtiInferioriVenoso.vsm = null;
      formData.schedaEcocolorDopplerArtiInferioriVenoso.vsp = null;
      formData.schedaEcocolorDopplerArtiInferioriVenoso.vene = null;
      formData.schedaEcocolorDopplerArtiInferioriVenoso.altro = null;
    }
  }
}
iniziaBozza();

function initVariabili() {
  if (!formData.schedaEcografiaAddominale) {
    formData.schedaEcografiaAddominale = {
      addomeSuperiore: {
        attivo:false,
        tuttoNormale: false,
        fegato: {
          stato: null,
          note: null
        },
        colecisti: {
          stato: null,
          note: null
        },
        vieBiliari: {
          stato: null,
          note: null
        },
        reneESurrene: {
          stato: null,
          note: null
        },
        pancreas: {
          stato: null,
          note: null
        },
        milza: {
          stato: null,
          note: null
        }
      },
      addomeInferiore: {
        attivo:false,
        tuttoNormale: false,
        utero: {
          stato: null,
          note: null
        },
        ovaieEdAnnessi: {
          stato: null,
          note: null
        },
        vescica: {
          stato: null,
          note: null
        },
        prostata: {
          stato: null,
          note: null
        },
        intestino: {
          stato: null,
          note: null
        }
      },
      aortaEGrandiVasi: {
        attivo:false,
        tuttoNormale: false,
        aoSovrarenale: {
          stato: null,
          note: null
        },
        aoInfrarenale: {
          stato: null,
          note: null
        },
        troncoCeliaco: {
          stato: null,
          note: null
        },
        arteriaEpatica: {
          stato: null,
          note: null
        },
        arteriaSplenica: {
          stato: null,
          note: null
        },
        arteriaMesentericaSuperiore: {
          stato: null,
          note: null
        },
        arteriaMesentericaInferiore: {
          stato: null,
          note: null
        },
        arteriaRenaleDx: {
          stato: null,
          note: null
        },
        arteriaRenaleSn: {
          stato: null,
          note: null
        }
      },
      relazioneNote : null
    };
  }
}

var validatore_addomeSuperiore = function(){
  if(
    formData.schedaEcografiaAddominale.addomeSuperiore.fegato.stato == "Normale" &&
    formData.schedaEcografiaAddominale.addomeSuperiore.colecisti.stato == "Normale" &&
    formData.schedaEcografiaAddominale.addomeSuperiore.vieBiliari.stato == "Normale" &&
    formData.schedaEcografiaAddominale.addomeSuperiore.reneESurrene.stato == "Normale" &&
    formData.schedaEcografiaAddominale.addomeSuperiore.pancreas.stato == "Normale" &&
    formData.schedaEcografiaAddominale.addomeSuperiore.milza.stato == "Normale"
  ){
    formData.schedaEcografiaAddominale.addomeSuperiore.tuttoNormale = true;
  }else{
    formData.schedaEcografiaAddominale.addomeSuperiore.tuttoNormale = false;
  }
};
var switch_addomeSuperiore = function(){
  if(formData.schedaEcografiaAddominale.addomeSuperiore.tuttoNormale==true){
    formData.schedaEcografiaAddominale.addomeSuperiore.fegato.stato = 'Normale';
    formData.schedaEcografiaAddominale.addomeSuperiore.colecisti.stato = 'Normale';
    formData.schedaEcografiaAddominale.addomeSuperiore.vieBiliari.stato = 'Normale';
    formData.schedaEcografiaAddominale.addomeSuperiore.reneESurrene.stato = 'Normale';
    formData.schedaEcografiaAddominale.addomeSuperiore.pancreas.stato = 'Normale';
    formData.schedaEcografiaAddominale.addomeSuperiore.milza.stato = 'Normale';
  }else{
    formData.schedaEcografiaAddominale.addomeSuperiore.fegato.stato = null;
    formData.schedaEcografiaAddominale.addomeSuperiore.colecisti.stato = null;
    formData.schedaEcografiaAddominale.addomeSuperiore.vieBiliari.stato = null;
    formData.schedaEcografiaAddominale.addomeSuperiore.reneESurrene.stato = null;
    formData.schedaEcografiaAddominale.addomeSuperiore.pancreas.stato = null;
    formData.schedaEcografiaAddominale.addomeSuperiore.milza.stato = null;
  }
};

var validatore_addomeInferiore = function(){
  if(
    formData.schedaEcografiaAddominale.addomeInferiore.utero.stato == "Normale" &&
    formData.schedaEcografiaAddominale.addomeInferiore.ovaieEdAnnessi.stato == "Normale" &&
    formData.schedaEcografiaAddominale.addomeInferiore.vescica.stato == "Normale" &&
    formData.schedaEcografiaAddominale.addomeInferiore.prostata.stato == "Normale" &&
    formData.schedaEcografiaAddominale.addomeInferiore.intestino.stato == "Normale"
  ){
    console.log("formData.schedaEcografiaAddominale.addomeInferiore.tuttoNormale = true;");
    formData.schedaEcografiaAddominale.addomeInferiore.tuttoNormale = true;
  }else{
    formData.schedaEcografiaAddominale.addomeInferiore.tuttoNormale = false;
    console.log("formData.schedaEcografiaAddominale.addomeInferiore.tuttoNormale = false;");
  }
};
var switch_addomeInferiore = function(){
  if(formData.schedaEcografiaAddominale.addomeInferiore.tuttoNormale==true){
    console.log("formData.schedaEcografiaAddominale.addomeInferiore.utero.stato = 'Normale';"+
    "formData.schedaEcografiaAddominale.addomeInferiore.ovaieEdAnnessi.stato = 'Normale';"+
    "formData.schedaEcografiaAddominale.addomeInferiore.vescica.stato = 'Normale';"+
    "formData.schedaEcografiaAddominale.addomeInferiore.prostata.stato = 'Normale';"+
    "formData.schedaEcografiaAddominale.addomeInferiore.intestino.stato = 'Normale';");
    formData.schedaEcografiaAddominale.addomeInferiore.utero.stato = "Normale";
    formData.schedaEcografiaAddominale.addomeInferiore.ovaieEdAnnessi.stato = "Normale";
    formData.schedaEcografiaAddominale.addomeInferiore.vescica.stato = "Normale";
    formData.schedaEcografiaAddominale.addomeInferiore.prostata.stato = "Normale";
    formData.schedaEcografiaAddominale.addomeInferiore.intestino.stato = "Normale";
  }else{
    console.log("formData.schedaEcografiaAddominale.addomeInferiore.utero.stato = null;"+
    "formData.schedaEcografiaAddominale.addomeInferiore.ovaieEdAnnessi.stato = null;"+
    "formData.schedaEcografiaAddominale.addomeInferiore.vescica.stato = null;"+
    "formData.schedaEcografiaAddominale.addomeInferiore.prostata.stato = null;"+
    "formData.schedaEcografiaAddominale.addomeInferiore.intestino.stato = null;");
    formData.schedaEcografiaAddominale.addomeInferiore.utero.stato = null;
    formData.schedaEcografiaAddominale.addomeInferiore.ovaieEdAnnessi.stato = null;
    formData.schedaEcografiaAddominale.addomeInferiore.vescica.stato = null;
    formData.schedaEcografiaAddominale.addomeInferiore.prostata.stato = null;
    formData.schedaEcografiaAddominale.addomeInferiore.intestino.stato = null;
  }
};

var validatore_aortaEGrandiVasi = function(){
  if(
    formData.schedaEcografiaAddominale.aortaEGrandiVasi.aoSovrarenale.stato == "Normale" &&
    formData.schedaEcografiaAddominale.aortaEGrandiVasi.aoInfrarenale.stato == "Normale" &&
    formData.schedaEcografiaAddominale.aortaEGrandiVasi.troncoCeliaco.stato == "Normale" &&
    formData.schedaEcografiaAddominale.aortaEGrandiVasi.arteriaEpatica.stato == "Normale" &&
    formData.schedaEcografiaAddominale.aortaEGrandiVasi.arteriaSplenica.stato == "Normale" &&
    formData.schedaEcografiaAddominale.aortaEGrandiVasi.arteriaMesentericaSuperiore.stato == "Normale" &&
    formData.schedaEcografiaAddominale.aortaEGrandiVasi.arteriaMesentericaInferiore.stato == "Normale" &&
    formData.schedaEcografiaAddominale.aortaEGrandiVasi.arteriaRenaleDx.stato == "Normale" &&
    formData.schedaEcografiaAddominale.aortaEGrandiVasi.arteriaRenaleSn.stato == "Normale"
  ){
    console.log("formData.schedaEcografiaAddominale.aortaEGrandiVasi.tuttoNormale = true;");
    formData.schedaEcografiaAddominale.aortaEGrandiVasi.tuttoNormale = true;
  }else{
    console.log("formData.schedaEcografiaAddominale.aortaEGrandiVasi.tuttoNormale = false;");
    formData.schedaEcografiaAddominale.aortaEGrandiVasi.tuttoNormale = false;
  }
};
var switch_aortaEGrandiVasi = function(){
  if(formData.schedaEcografiaAddominale.aortaEGrandiVasi.tuttoNormale==true){
    console.log("formData.schedaEcografiaAddominale.aortaEGrandiVasi.aoSovrarenale.stato = 'Normale';"+
    "formData.schedaEcografiaAddominale.aortaEGrandiVasi.aoInfrarenale.stato = 'Normale';"+
    "formData.schedaEcografiaAddominale.aortaEGrandiVasi.troncoCeliaco.stato = 'Normale';"+
    "formData.schedaEcografiaAddominale.aortaEGrandiVasi.arteriaEpatica.stato = 'Normale';"+
    "formData.schedaEcografiaAddominale.aortaEGrandiVasi.arteriaSplenica.stato = 'Normale';"+
    "formData.schedaEcografiaAddominale.aortaEGrandiVasi.arteriaMesentericaSuperiore.stato = 'Normale';"+
    "formData.schedaEcografiaAddominale.aortaEGrandiVasi.arteriaMesentericaInferiore.stato = 'Normale';"+
    "formData.schedaEcografiaAddominale.aortaEGrandiVasi.arteriaRenaleDx.stato = 'Normale';"+
    "formData.schedaEcografiaAddominale.aortaEGrandiVasi.arteriaRenaleSn.stato = 'Normale';");
    formData.schedaEcografiaAddominale.aortaEGrandiVasi.aoSovrarenale.stato = "Normale";
    formData.schedaEcografiaAddominale.aortaEGrandiVasi.aoInfrarenale.stato = "Normale";
    formData.schedaEcografiaAddominale.aortaEGrandiVasi.troncoCeliaco.stato = "Normale";
    formData.schedaEcografiaAddominale.aortaEGrandiVasi.arteriaEpatica.stato = "Normale";
    formData.schedaEcografiaAddominale.aortaEGrandiVasi.arteriaSplenica.stato = "Normale";
    formData.schedaEcografiaAddominale.aortaEGrandiVasi.arteriaMesentericaSuperiore.stato = "Normale";
    formData.schedaEcografiaAddominale.aortaEGrandiVasi.arteriaMesentericaInferiore.stato = "Normale";
    formData.schedaEcografiaAddominale.aortaEGrandiVasi.arteriaRenaleDx.stato = "Normale";
    formData.schedaEcografiaAddominale.aortaEGrandiVasi.arteriaRenaleSn.stato = "Normale";
  }else{
    console.log("formData.schedaEcografiaAddominale.aortaEGrandiVasi.aoSovrarenale.stato = null;"+
    "formData.schedaEcografiaAddominale.aortaEGrandiVasi.aoInfrarenale.stato = null;"+
    "formData.schedaEcografiaAddominale.aortaEGrandiVasi.troncoCeliaco.stato = null;"+
    "formData.schedaEcografiaAddominale.aortaEGrandiVasi.arteriaEpatica.stato = null;"+
    "formData.schedaEcografiaAddominale.aortaEGrandiVasi.arteriaSplenica.stato = null;"+
    "formData.schedaEcografiaAddominale.aortaEGrandiVasi.arteriaMesentericaSuperiore.stato = null;"+
    "formData.schedaEcografiaAddominale.aortaEGrandiVasi.arteriaMesentericaInferiore.stato = null;"+
    "formData.schedaEcografiaAddominale.aortaEGrandiVasi.arteriaRenaleDx.stato = null;"+
    "formData.schedaEcografiaAddominale.aortaEGrandiVasi.arteriaRenaleSn.stato = null;");
    formData.schedaEcografiaAddominale.aortaEGrandiVasi.aoSovrarenale.stato = null;
    formData.schedaEcografiaAddominale.aortaEGrandiVasi.aoInfrarenale.stato = null;
    formData.schedaEcografiaAddominale.aortaEGrandiVasi.troncoCeliaco.stato = null;
    formData.schedaEcografiaAddominale.aortaEGrandiVasi.arteriaEpatica.stato = null;
    formData.schedaEcografiaAddominale.aortaEGrandiVasi.arteriaSplenica.stato = null;
    formData.schedaEcografiaAddominale.aortaEGrandiVasi.arteriaMesentericaSuperiore.stato = null;
    formData.schedaEcografiaAddominale.aortaEGrandiVasi.arteriaMesentericaInferiore.stato = null;
    formData.schedaEcografiaAddominale.aortaEGrandiVasi.arteriaRenaleDx.stato = null;
    formData.schedaEcografiaAddominale.aortaEGrandiVasi.arteriaRenaleSn.stato = null;
  }
};

registerFunction("validatore_addomeSuperiore",validatore_addomeSuperiore);
registerFunction("switch_addomeSuperiore",switch_addomeSuperiore);
registerFunction("validatore_addomeInferiore",validatore_addomeInferiore);
registerFunction("switch_addomeInferiore",switch_addomeInferiore);
registerFunction("validatore_aortaEGrandiVasi",validatore_aortaEGrandiVasi);
registerFunction("switch_aortaEGrandiVasi",switch_aortaEGrandiVasi);

initVariabili();

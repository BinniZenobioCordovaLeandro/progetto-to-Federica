function newBozza(){
  if(!formData.schedaRefertoBreve){
    formData.schedaRefertoBreve = {
      terapia : {
        nonStampare : false,
        testo: null
      },
      referto: null
    };
    if(initData){
      formData.schedaRefertoBreve.terapia.testo = initData.patient.homeTherapiesFormatted;
      if (!formData.schedaRefertoBreve.referto && initData.orders) {
        for (var index1 in initData.orders) {
          var order1 = initData.orders[index1];
          if (!formData.schedaRefertoBreve.referto) {
            formData.schedaRefertoBreve.referto = order1.sovpSummary;
          } else {
            formData.schedaRefertoBreve.referto += order1.sovpSummary;
          }
        }
      }
    }
  }
}
newBozza();

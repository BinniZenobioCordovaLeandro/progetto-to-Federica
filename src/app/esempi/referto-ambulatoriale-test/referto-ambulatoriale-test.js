//repository metadata
var prePublishFunction = function(instanceValueId, isSigned) {

  var doctor = null;
  if (initData.orders[0].doctor) {
    doctor = initData.orders[0].doctor.taxCode;
  }

  var repDoctor = null;
  var repDoctorCode = null;
  if (initData.orders[0].reportingDoctor) {
    repDoctor = initData.orders[0].reportingDoctor.taxCode;
    repDoctorCode = initData.orders[0].reportingDoctor.code;
  }

  registerMetaData('xdsbClassCod', 'REF');
  registerMetaData('xdsbFormatCod', 'PDF');
  registerMetaData('xdsbTypeCod', '11488-4');
  registerMetaData('xdsbConfidentialityCod', 'N');

  registerMetaData('firmato', 'false');

  //registerMetaData('eventType','A'); // A = Ambulatoriale

  registerMetaData('autore', initData.generalData.username);

  //registerMetaData('tipoDocumento','RefertoAmbulatorialeAccesso');
  registerMetaData('dataDocumento', initData.generalData.currentDateTime);
  registerMetaData('dataEvento', initData.encounter.entryDate);

  /**
  registerMetaData('unitaEroganteCode',initData.orders[0].servicePointCode);
  registerMetaData('unitaEroganteDescr',initData.orders[0].servicePoint);
  registerMetaData('unitaRichiedenteCode',initData.encounter.servicePointCode);
  registerMetaData('unitaRichiedenteDescr',initData.encounter.servicePoint);
  */

  registerMetaData('unitaEroganteCode', initData.orders[0].organizationUnitCode);
  registerMetaData('unitaEroganteDescr', initData.orders[0].organizationUnit);
  registerMetaData('unitaRichiedenteCode', initData.encounter.organizationUnitCode);
  registerMetaData('unitaRichiedenteDescr', initData.encounter.organizationUnit);

  registerMetaData('medicoRefertante', repDoctor);
  registerMetaData('matricolaMedico', repDoctorCode);
  registerMetaData('firmatario', repDoctor);

  registerMetaData('medicoRichiedente', repDoctor); // is this ok??

  registerMetaData('xdsbPracticeSettingCod', initData.orders[0].servicePointMedicalSpecializationCode);
  registerMetaData('idRichiestaInterno', initData.orders[0].orderEventExamId);
  registerMetaData('idRichiestaEsterna', initData.orders[0].counter);

  //registerMetaData('istituto',initData.orders[0].organizationUnitCode);
  //registerMetaData('disciplina',initData.orders[0].servicePointMedicalSpecializationCode);
  //registerMetaData('reparto',initData.orders[0].servicePointCode);

};
registerPrePublishFunction(prePublishFunction);

// init
function init() {

  if (!formData.stampaAllergie) {
    formData.stampaAllergie = true;
  }
  if (!formData.stampaDiagnosi) {
    formData.stampaDiagnosi = true;
  }
  if (!formData.stampaTerapie) {
    formData.stampaTerapie = false;
  }
  if (!formData.stampaAnamnesi) {
    formData.stampaAnamnesi = true;
  }

  if (initData) {
    if (!formData.allergie && initData.patient) {
      formData.allergie = initData.patient.allergiesSummaryFormatted;
    }
    if (!formData.diagnosi_note && initData.patient) {
      formData.diagnosiNote = initData.patient.diagnosisSummaryFormatted;
    }
    if (!formData.terapie_in_atto && initData.patient) {
      formData.terapieInAtto = initData.patient.homeTherapiesFormatted;
    }
    if (!formData.anamnesi && initData.patient) {
      formData.anamnesi = initData.patient.anamnesisSummaryFormatted;
    }
    if (!formData.prescrizioni && initData.orders) {
      for (var index in initData.orders) {
        var order = initData.orders[index];
        if (order.additionalPrescriptions) {
          if (!formData.prescrizioni) {
            formData.prescrizioni = order.additionalPrescriptions;
          } else {
            formData.prescrizioni += order.additionalPrescriptions;
          }
        }
      }
    }

    if (!formData.referto && initData.orders) {
      for (var index1 in initData.orders) {
        var order1 = initData.orders[index1];
        if (!formData.referto) {
          formData.referto = order1.sovpSummary;
        } else {
          formData.referto += order1.sovpSummary;
        }
      }
    }
  }
  console.dir(initData);
}

init();

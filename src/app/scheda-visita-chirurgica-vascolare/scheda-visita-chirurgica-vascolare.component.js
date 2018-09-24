function initEvaluation(){
  if (!formData.schedaVisitaChirurgicaVascolare) {
    formData.schedaVisitaChirurgicaVascolare = {
      nicotina : false,
      adiposita : false,
      cic : false,
      dislipidemia : false,
      diabete : false,
      ipertensione : false,

      anamnesi : null,
      disturbi : null,
      esame : null,
      diagnosi : null,
      consigli : null,

      radialis : {
        sx : 0,
        dx : 0
      },
      post : {
        sx : 0,
        dx : 0
      },
      ant : {
        sx : 0,
        dx : 0
      },
      abi : {
        sx : 0,
        dx : 0
      }
    };
    if (initData.patient) {
      formData.schedaVisitaChirurgicaVascolare.anamnesi = (initData.patient.anamnesisSummary[0].dataInserimento) + (initData.patient.anamnesisSummary[0].utenteInserimento)+"\n"+(initData.patient.anamnesisSummary[0].tipologia)+"\n"+(initData.patient.anamnesisSummary[0].descrizione);;
      formData.schedaVisitaChirurgicaVascolare.disturbi = "";
      formData.schedaVisitaChirurgicaVascolare.esame = initData.patient.diagnosisSummaryFormatted;
      formData.schedaVisitaChirurgicaVascolare.diagnosi = initData.orders[0].sovpSummary;
      formData.schedaVisitaChirurgicaVascolare.consigli = null;
    }
  }
}

var switchBoolean =function(boolean){
  //alert(!boolean);
  boolean = !boolean;
  return boolean;
};

var esegueOperazione = function(){
  formData.schedaVisitaChirurgicaVascolare.abi.sx = operazioneABI(formData.schedaVisitaChirurgicaVascolare.post.sx,formData.schedaVisitaChirurgicaVascolare.ant.sx,formData.schedaVisitaChirurgicaVascolare.radialis.sx);
  formData.schedaVisitaChirurgicaVascolare.abi.dx = operazioneABI(formData.schedaVisitaChirurgicaVascolare.post.dx,formData.schedaVisitaChirurgicaVascolare.ant.dx,formData.schedaVisitaChirurgicaVascolare.radialis.dx);
};

var operazioneABI = function(post,ant,radialis){
  var ritorna = ((parseFloat(post) + parseFloat(ant))/2)/parseFloat(radialis);
  if (isFinite(ritorna)){
    ritorna = round(ritorna, 2);
    console.log(ritorna);
    return ritorna;
  }
  return 0;
};

var round = function(num, decimales) {
  // round di decimale di un numero...
  // esempio, round(5.12345, 3) => 5.123
    var signo = (num >= 0 ? 1 : -1);
    num = num * signo;
    if (decimales === 0) //con 0 decimales
        return signo * Math.round(num);
    // round(x * 10 ^ decimales)
    num = num.toString().split('e');
    num = Math.round(+(num[0] + 'e' + (num[1] ? (+num[1] + decimales) : decimales)));
    // x * 10 ^ (-decimales)
    num = num.toString().split('e');
    return signo * (num[0] + 'e' + (num[1] ? (+num[1] - decimales) : -decimales));
};

registerFunction("switchBoolean",switchBoolean);
registerFunction("esegueOperazione",esegueOperazione);
registerFunction("operazioneABI",operazioneABI);

initEvaluation();

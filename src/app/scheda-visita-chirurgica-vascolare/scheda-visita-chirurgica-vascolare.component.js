formData.schedaVisitaChirurgicaVascolare = {};

formData.schedaVisitaChirurgicaVascolare.anamnesi = "";

formData.schedaVisitaChirurgicaVascolare.nicotina = false;
formData.schedaVisitaChirurgicaVascolare.adiposita = false;
formData.schedaVisitaChirurgicaVascolare.cic = false;
formData.schedaVisitaChirurgicaVascolare.dislipidemia = false;
formData.schedaVisitaChirurgicaVascolare.diabete = false;
formData.schedaVisitaChirurgicaVascolare.ipertensione = false;

formData.schedaVisitaChirurgicaVascolare.disturbi = "";

formData.schedaVisitaChirurgicaVascolare.esame = "";

formData.schedaVisitaChirurgicaVascolare.radialis = {};
formData.schedaVisitaChirurgicaVascolare.radialis.sx =0;
formData.schedaVisitaChirurgicaVascolare.radialis.dx =0;
formData.schedaVisitaChirurgicaVascolare.post = {};
formData.schedaVisitaChirurgicaVascolare.post.sx =0;
formData.schedaVisitaChirurgicaVascolare.post.dx =0;
formData.schedaVisitaChirurgicaVascolare.ant = {};
formData.schedaVisitaChirurgicaVascolare.ant.sx =0;
formData.schedaVisitaChirurgicaVascolare.ant.dx =0;
formData.schedaVisitaChirurgicaVascolare.abi = {};
formData.schedaVisitaChirurgicaVascolare.abi.sx =0;
formData.schedaVisitaChirurgicaVascolare.abi.dx =0;

formData.schedaVisitaChirurgicaVascolare.diagnosi = "";

formData.schedaVisitaChirurgicaVascolare.consigli = "";

var switchBoolean =function(boolean){
  //alert(!boolean);
  boolean = !boolean;
  return boolean;
};
var aumentareNumero = function(number, incremento){
  number = number + incremento;
  return number;
};
var diminuireNumero = function(number, decremento){
  number = number - decremento;
  return number;
};

registerFunction("switchBoolean",switchBoolean);
registerFunction("aumentareNumero",aumentareNumero);
registerFunction("diminuireNumero",diminuireNumero);

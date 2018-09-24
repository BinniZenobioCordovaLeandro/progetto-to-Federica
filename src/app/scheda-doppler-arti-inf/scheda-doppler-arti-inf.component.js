function initBozza(){
  if(!formData.schedaDoppler){
    formData.schedaDoppler={
      quesito : null,
      pressione : {
        rad: {
          polso1:null,
          dx:0,
          sx:0,
          polso2:null
        },
        ant:{
          polso1:null,
          dx:0,
          sx:0,
          polso2:null
        },
        post:{
          polso1:null,
          dx:0,
          sx:0,
          polso2:null
        },
        abi:{
          dx:0,
          sx:0
        }
      }
    };
    if(initData){
      formData.schedaDoppler.quesito = "diagnosi aganciata alla visita";
    }
  }
}
var esegueOperazione = function(){
  formData.schedaDoppler.pressione.abi.dx = operazioneABI(formData.schedaDoppler.pressione.post.dx,formData.schedaDoppler.pressione.ant.dx,formData.schedaDoppler.pressione.rad.dx);
  formData.schedaDoppler.pressione.abi.sx = operazioneABI(formData.schedaDoppler.pressione.post.sx,formData.schedaDoppler.pressione.ant.sx,formData.schedaDoppler.pressione.rad.sx);
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

registerFunction("esegueOperazione",esegueOperazione);
initBozza();

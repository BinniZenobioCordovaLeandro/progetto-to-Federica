// function controlli per Numbers
function round(num, decimales) {
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

// FUNCTIONS PER OPERAZIONI MATEMATIQUE.
registerFunction("aumentareNumero",aumentareNumero);
registerFunction("diminuireNumero",diminuireNumero);

var aumentareNumero = function(number, incremento){
  number = number + incremento;
  return number;
};
var diminuireNumero = function(number, decremento){
  number = number - decremento;
  return number;
};

// SWITCH FUNCTIONS
registerFunction("switchBoolean",switchBoolean);

var switchBoolean =function(boolean){
  boolean = !boolean;
  return boolean;
};

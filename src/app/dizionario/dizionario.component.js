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
};

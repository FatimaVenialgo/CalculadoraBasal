const PESO = document.getElementById("peso");
const BOTON = document.getElementById("calcular");
const FLU =  document.getElementById("flu")
const MAN = document.getElementById("man")
const ERROR = document.getElementById("error")
//validar que el valor ingresado sea un peso  aceptable
BOTON.addEventListener("click", calcular);
function calcular() {
  let peso = PESO.value;
  if (peso <= 0) {
    ERROR.innerHTML= "Ingrese un valor valido"
    console.log("Ingrese un valor valido");
  } else if (PESO.value <= 30) {
    ERROR.style.display= "none";
    console.log(holliday(peso));
    let flujo = holliday(peso);
    FLU.innerHTML= "Flujo: " + Math.round(flujo/24 )+ " cc/hr"
    let mantenimiento =  (flujo + flujo/2)/24;
    MAN.innerHTML= "Mantenimiento: "+ Math.round(mantenimiento) + " cc/hr"
  } else {
    ERROR.style.display= "none";
    let superf = superficie(peso)/24;
    console.log(superf);
    FLU.innerHTML = "Flujo * 1500: "+ Math.round(superf*1500) + " cc/hr"
    MAN.innerHTML = "Flujo * 2000: "+ Math.round(superf*2000) + " cc/hr"
  }
}

function holliday(peso) {
  let result;
  if (peso <= 10) {
    result = peso * 100;
  } else if (peso > 10 && peso <= 20) {
    result = 1000 + (peso - 10) * 50;
  } else if (peso > 20) {
    result = 1500 + (peso - 20) * 20;
  }
  return result;
}

function superficie(peso) {
  let result2;
  if (peso > 30) {
    result2 = (peso * 4 + 7) / (Number(peso) + 90);
  }
  return result2;
}

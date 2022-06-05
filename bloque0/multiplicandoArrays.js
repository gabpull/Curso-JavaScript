
var arrayDeNumeros = [0,1,2,3,4,5,6,7];


function multiplicandoArrays(arraya, num) {

  for (let i = 0; i < arraya.length; i++) {
    
    arraya[i] = arraya[i] * num ;
  }
  return arraya;
}


multiplicandoArrays(arrayDeNumeros,2);

for(var i = 0; i < arrayDeNumeros.length ; i++){
  console.log(arrayDeNumeros[i])
}



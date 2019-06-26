/*var semaforo = prompt('Dime en que color esta el semaforo')
var semaforoVerde = 'VERDE'

if(semaforo == semaforoVerde){
    alert('Avanzar')
}else if(semaforo == 'AMARILLO'){
    alert('Corre')
}
else{
    alert('Detener')
}
*/

/*
var edad =  prompt('Dime tu edad')

if (edad >= 18) {
alert('Puedes Comprar Cerveza')
}
else{
    alert('No puedes comprar Cerveza')
}
*/
//Operadores logicos
/*
console.log("palabra ==" "palabra" & "adios" == "adios");
console.log("palabra1 ==" "palabra" & "adios" == "adios");
console.log("palabra ==" "palabra1" & "adios" == "adios");
console.log("palabra ==" "palabra" & "adios1" == "adios");
console.log("palabra ==" "palabra" & "adios" == "adios1");
/*
//OR
console.log("palabra ==" "palabra" & "adios" == "adios");
console.log("palabra1 ==" "palabra" & "adios" == "adios");
console.log("palabra ==" "palabra1" & "adios" == "adios");
console.log("palabra ==" "palabra" & "adios1" == "adios");
console.log("palabra ==" "palabra" & "adios" == "adios1");
*/

//var username =prompt('Escribe tu username')
//var password = prompt('Escribe tu contraseña')

//var userid = "ramiro"
//var validation= "123456"

//if (username == userid && validation == password ){
    //alert('Bienvenido ' + username);
//}
//else {
  //  alert('Informacion Incorrecta')
//}


//Hacer el juego de piedra papel o tijera
/*
var j1 = prompt('Jugador 1 elige piedra, papel o tijeras');
var j2 = prompt('Jugador 2 elige piedra, papel o tijeras');
var win = 'Gana'
if (j1 == 'piedra' && j2 == 'papel') {
alert(win + ' ' + j2)
}
else if (j1 == 'papel' && j2 == 'tijeras') {
    alert(win + ' ' + j2)
}
else if (j1 == 'tijeras' && j2 == 'piedra') {
    alert(win + ' ' + j2)
}
if (j2 == 'piedra' && j1 == 'papel') {
    alert(win + '' + j1)
    }
    else if (j2 == 'papel' && j1 == 'tijeras') {
        alert(win + ' ' + j1)
    }
    else if (j2 == 'tijeras' && j1 == 'piedra') {
        alert(win + ' ' + j1)
    }

    else {
        alert('Empate!')
    }
*/
// comparando numeros
var number1 = prompt('Dame un numero')
var number2 = prompt('Dame otro numero')

if (number1 > number2) {
    alert('El numero ' + number1 + ' Es mayor que el numero ' + number2)
}

else if (number2 < number1) {
    alert('El numero ' + number2 + ' Es menor que el numero ' + number1)
}

else if (number2 > number1) {
    alert('El numero ' + number2 + ' Es mayor que el numero ' + number1)
}
else if (number1 < number2) {
  alert('El numero ' + number2 + ' Es menor que el numero ' + number1)  
}
else {
    alert("Los numeros son iguales")
}
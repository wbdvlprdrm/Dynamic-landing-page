/*
var numero = document.getElementById('numero')
var numeroTypoNumber = parseInt(numero.innerHTML)
function suma () {
    numeroTypoNumber = numeroTypoNumber + 1
    numero.innerHTML = numeroTypoNumber 
}

function resta () {
    numeroTypoNumber = numeroTypoNumber - 1
    numero.innerHTML = numeroTypoNumber 
}
document.getElementById(suma)
*/
/*

    var saludo = document.getElementById('saludo')
    function saludar () {
    if(saludo.innerHTML == 'Hola'){
        saludo.innerHTML = 'Adios'
    }
    else {
        saludo.innerHTML = "Hola"
    }
    }
}
*/
/*
var inputNumber = document.getElementById('inputNumber')
var multiploDiez = document.getElementById('multiploDiez')

function multiplicar() {
    var numeroMultiplicar = parseInt(inputNumber.value)
    multiploDiez.innerHTML = numeroMultiplicar * 10
}
*/
var amountinput = document.getElementById('amount')
var tipamount = document.getElementById('tip')
var peopleamount = document.getElementById('people')

function total() {
    var amount = parseInt(amountinput.value)
    var tip = parseInt(tipamount.value)
    var people = parseInt(peopleamount.value)
 var propina = (amount * tip)
 var tipdecimal = (tip / 100)

 var total = document.getElementById('Total')
 total.innerHTML = propina
}




























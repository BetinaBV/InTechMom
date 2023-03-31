
//PRACTICA 1: FUNCIONES Y CONDICIONALES
const prompt = require("prompt-sync")({sigint: true});
//1
/*
let weekDays = ['lunes','martes','miercoles','jueves','viernes'];

for(let i = 0; i < weekDays.length; i++){
    if(weekDays[i] == 'jueves'){
        console.log("Llegamos al día " + weekDays[i]);   
    }
}

//2

const  newArr0 =weekDays.slice(1,3);
const  newArr1 =weekDays.slice(4);

console.log(newArr1);
 
//3

console.log("El indice del día miercoles es:  " + weekDays.indexOf("miercoles"));

//4

const newArr2 = weekDays.slice();
newArr2.splice(1,1,"domingo");
console.log(newArr2);
*/

//5
/*
function entrada(){
    var valor1;
    valor1 = parseInt(prompt('Favor ingrese un valor: ',''));
    return(valor1);
}

function procesamiento(valor){
    valor = valor + 1;
    salida(valor);
}

function salida(valor){
    console.error(valor);
}
const valor = entrada();
procesamiento(valor);
*/

//6
/*
function cotizarDolares(pesos){
    let dolar;
    dolar = pesos / 388;
    return dolar;
}

function cotizarPesos(dolar){
    let pesos;
    pesos = dolar * 388;
    return pesos;
}

function cotizarMoneda(moneda){
    if(moneda == "pesos"){
        console.log("Cotizando pesos:");
        const pesos = prompt("Ingrese la cantidad de pesos a cotizar: ",);        
        const cotizacion = cotizarDolares(pesos);
        console.log("Usted tiene: " + pesos + " pesos y equivalen a " + cotizacion + " dolares");
    }else{
        console.log("Cotizando dolar:");
        const dolar = prompt("Ingrese la cantidad de dolares a cotizar: ",);        
        const cotizacion = cotizarPesos(dolar);
        console.log("Usted tiene: " + dolar + " dolares y equivalen a " + cotizacion + " pesos");
    }
}
const moneda = prompt("Ingrese el tipo de moneda: pesos o dolar: ",);
cotizarMoneda(moneda);
*/

//7
/*
function isOpen(hora){
    if (8 <= hora && hora <= 13 || 14 <= hora && hora <= 18){
        console.log(true);
    }else{
        console.log(false);
    }
 }

class Store{
    constructor (nameStore, addressStore, ownerStrore,headingStore, isOpen){
        this.nameStore = nameStore;
        this.addressStore = addressStore; 
        this.ownerStrore = ownerStrore;
        this.headingStore = headingStore;
        this.isOpen = isOpen(hora); 
    }
}

isOpen(9);
isOpen(19);
*/

//8 

class cliente{
    constructor(nombre,dineroEnCta,telefono){
        this.nombre = nombre;
        this.dineroEnCta = dineroEnCta;
        this.telefono = telefono;
        this.transferirDinero = transferirDinero();
    }    
}    
function transferirDinero(valor){
        if(valor <= this.dineroEnCta){
            console.log("Saldo sufiente para tranferir ");
            dineroEnCta = dineroEnCta - valor;
            this.dineroEnCta = dineroEnCta;
        }else{
            console.log("Fondos insuficientes ");
        }
    }


dineroEnCta = 1500;
let valor = prompt("Ingrese el monto a transferir ", "");
transferirDinero(valor);

//9

cliente =[
    {
        nombre: "Juan",
        dineroEnCta: 1500,
        telefono: 3564895247
    },
    {
        nombre: "Daniela",
        dineroEnCta: 500,
        telefono: 351894532
    },
    {
        nombre: "Gimena",
        dineroEnCta: 0,
        telefono: 3492623214
    }
]
    
for(let i = 0; i < cliente.length; i++){
    if(cliente[i].dineroEnCta > valor){
        console.log("El cliente " + cliente[i].nombre + " tiene saldo suficiente para transferir");
    }
    
}

//10
function calcularEdad(añoNacimiento){
    let edad;
    edad = 2023 - añoNacimiento;
    return edad;
}
const añoNacimiento = prompt("Ingresa tu año de nacimiento: ");
año = calcularEdad(añoNacimiento);
console.log("Tu edad es: " + año);
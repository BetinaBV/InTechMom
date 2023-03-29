
//PRACTICA 1: FUNCIONES Y CONDICIONALES

//1

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

//5
/*
function entrada(){
    var valor;
    valor = prompt('Favor ingrese un valor: ', '');
    return valor;
}
function procesamiento(valor){
    valor = valor + 1;
}
function salida(valor){
    alert(valor);
}

const valor = entrada();
procesamiento(valor);
salida(valor);*/
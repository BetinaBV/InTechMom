// PRACTICA 1: OBJETOS Y CICLOS

//1
/*
var array = []; 
for(let i = 1; i < 6; i++){
   array.push(i);
}
console.log(array);
*/

//2
/*
const myAlphabet = ['A','B','C','D','E','F','G'];
const longitudArray= myAlphabet.length;
console.log("La longitud del array es: " + longitudArray);
*/

//3
/*const fruits = ['pera', 'manzana', 'durazno', 'banana'];

for(let j= 0; j < fruits.length; j++){
    console.log(fruits[j]);
}*/

//4
/*
const numbers = [1, 3, 5, 7, 9];

for(let j= 0; j < numbers.length; j++){
    numbers[j]= numbers[j] + 2;
}
console.log(numbers);
*/

//5
/*
const frase = "Erre con erre cigarro erre con erre barril rápido ruedan los carros cargados de azúcar del ferrocarril";
let cont = 0;
for(let i = 0; i < frase.length; i++){
    if(frase[i] == 'r'){
        cont ++;
    }
}
console.log("La frase contiene: " + cont + " r");
*/

//6
/*
let people = ["Ana","Carolina","Laura","Natalia","Fernanda"];
//6a.
for( let i = 0; i< people.length; i++){
    console.log(people[i]);
}
//6b
people.splice(1,1);
console.log(people);console.log("Carolina ah sido eliminada");
//6c 
people.pop();
console.log(people);
console.log("Fernanda ah sido eliminada");
//6d
people.splice(0,0,"Francisco");
console.log(people);
console.log("Francisco ah sido agrgado a la lista");
//6e
people.push("Betina");
console.log(people);
console.log("Betina ah sido agrgada a la lista");
//6f
console.log("Natalia se encuentra en el " + people.indexOf("Natalia") + " lugar" );
//6g
console.log("El ultimo elemnto se encuentra en el " + people.indexOf("Betina") + " lugar");
console.log("El ultimo elemnto se encuentra en el " + people.lastIndexOf("Betina") + " lugar");
*/

//7
/*
const songs = [
    {
        nameSong : "song1",
        song : "Los caminos de la vida",
        artist : "Vicentico",
        year : 1993,
        album : "Tropa vallenata"
    },
    {
        nameSong : "song2",
        song : "Cuando no estas",
        artist : "Andres Calamaro",
        year : 2013,
        album : "Bohemio"
    },
    {
        nameSong : "song3",
        song : "Si te vas",
        artist : "Airbag",
        year : 2006,
        album : "La partida de la gitana"
    }
];
*/

//8
/*
class Store{
    constructor (nameStore, addressStore, ownerStrore,headingStore){
        this.nameStore = nameStore;
        this.addressStore = addressStore; 
        this.ownerStrore = ownerStrore;
        this.headingStore = headingStore;
    }
}

//9
const store1 = new Store("JyB","Santa fe 123","Pepe Alarcon","Polirubro");
const store2 = new Store("Musimundo","25 de Mayo 4156","Juan Perez","Electrodomesticos");
const store3 = new Store("Chapulin","9 de Julio 2742","Alan Jean","Supermercado");
const store4 = new Store("Muaa","25 de Mayo 2345","Laura Vicenti","Indumentaria Juvenil");
const store5 = new Store("Opcion 4","25 de Mato 2356","Juliana ALmada","Indumentaria Deportiva");

console. log(store1);
*/

//10
/*
const lion = {
    species: 'Panther leo',
    foots: 4,
    hasTail: true,
    weight: '190kg',
    isMammal: true, 
}
console.log(lion.foots);
console.log(lion.hasTail);
console.log(lion["species"]);
*/
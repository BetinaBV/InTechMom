//1
const nombre = "Homero";
const apellido = "Simpsons";
const edad = 50;


//2
console.log("Nombre: " + nombre + ", tipo: " + typeof nombre);
console.log("Apellido: " + apellido + ", tipo: " + typeof apellido);
console.log("Edad: " + edad + ", tipo: " + typeof edad);


//3
var city;

city = "Springfield";
console.log(city);

city = "Shelbyville";
console.log(city);

city = "Capital City";
console.log(city);

city = "Nueva Zelanda";
console.log(city);

city = "España";
console.log(city);

//4

console.log(typeof("papa"));
//Prediccion: string
//Actual: string

console.log(typeof(20));
//Prediccion:number
//Actual: number

console.log(typeof(95.5));
//Prediccion: number
//Actual: number

console.log(typeof(NaN));
//Prediccion: NaN
//Actual: number

console.log(typeof("hello"));
//Prediccion: string
//Actual: string

console.log(typeof(true));
//Prediccion: boolean
//Actual: boolean

console.log(typeof(1 != 2));
//Prediccion: boolean
//Actual: boolean

console.log("1" - "3");
//Prediccion:NaN
//Actual: 2

console.log("hamburger" + "s");
//Prediccion: hamburgers
//Actual: hamburgers

console.log("1" + "3");
//Prediccion: 13
//Actual: 13

console.log("johnny" + 5);
//Prediccion: johnny5
//Actual: johnny5

console.log("johnny" - 5);
//Prediccion:NaN
//Actual: NaN

console.log(99 * "luftbaloons");
//Prediccion: NaN
//Actual: NaN

console.log("hamburgers" - "s");
//Prediccion: hamburger
//Actual: NaN

//5

console.log("al que madruga Dios lo ayuda".toUpperCase());

//6

console.log("MAS VALE PAJARO EN MANO QUE CIENTOS VOLANDO".toLowerCase());

//7

const saludo = 'HoLa';
const saludo2 = 'mUnDo';

console.log(saludo.toLowerCase() + " " + saludo2.toUpperCase());

//8

var precioProducto =  100;
//precioProducto = prompt("Ingrese el valor del producto: ");

let precioConDcto = 1;

precioConDcto = precioProducto - (precioProducto * 20 / 100);

console.log("Su producto tiene un precio de "  + precioConDcto + " el descuento fue del 20%.");


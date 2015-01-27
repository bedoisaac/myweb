/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




var start = "Este es mi primer intento en Javascript";

document.write(start);
document.write('<br>');

var x = "Isaac said,\" i will make it happend\" ";

document.write(x);
document.write('<br>');
var name = "Isaac";
var action = "acomplish my goal";
var how = "pushing to the max";
document.write("my name is " + name + " I will " + action + how);

document.write('<br>');

// los siguientes correcpondes a form de abajo

function confirme() {
    alert("Los datos son correctos");
}
document.write('<br>');

function afirme() {
    alert("Confirme sus datos");
}

/*
 funcion sirve poniendo valor en los () o sin valor
 
 */




/////////////////////////////////////////////////////
/*  +++++++++DISABLE CUS ALERTS
function saludo(name) {
    alert("Bienvenido " + name + " disfrute");
}

saludo("Isaac");

tambien podemos asignarle diferentes valores a name con la alerta segun el valor

saludo("Campeon");
saludo("Senor"); */
///////////////////////////////////////////////////




/* funcion con mas  de 2 variables  */
document.write('<br>');

function cosas(uno, dos, tres) {
    document.write(uno + " its better than " + dos + " and " + tres + " elije" + "<br/>");
}

cosas("toyota", "honda", "dodge");
cosas("dogs", "cat", "mouse");
cosas("water", "coffe", "beer");
document.write('<br>');
document.write('<br>');
document.write('<br>');
document.write('<br>');

/* tag return */
function mats(a, d) {
    var c = a + d;
    return c;
}
document.write(mats(5, 6));
document.write('<br>');
document.write('<br>');

function pro() {
    return "hello tag return";
}
document.write(pro());
document.write('<br>');
document.write('<br>');

/*
 function calling other functions tener cuidado aqui de no reper variables
 */

function primero() {
    document.write("funcion uno");
}

function segundo() {
    document.write(" funcion dos");
}

function empezar() {
    primero();
    segundo();
}

empezar();
document.write('<br>');
document.write('<br>');
document.write('<br>');
document.write('<br>');
document.write('<br>');
document.write('<br>');

/*funcion sin termino no recomendada
 
 function paso1() {
 document.write("Primero");
 paso2();
 }
 function paso2()  {
 document.write("Segundo");
 paso1();
 }
 
 paso1();
 */

/*Global and local variables
 Esta es una variables global esta afuera de la funcion*/
document.write("Global and local variables");
document.write('<br>');
var dog = "chihuahua";
function animal() {
    document.write("chihuahua");
}
animal();
document.write('<br>');
document.write("dog");

document.write('<br>');
document.write('<br>');
document.write('<br>');
document.write('<br>');

/*Variable local  mismo ejemplo pero con la variable
 dentro de la funcion la cual solo imprimiria la funcion por que la var esta dentro
 
 
 function  animal() {
 document.write ("chihuahua");
 var dog= "chihuahua";
 }
 animal ();
 document.write('<br>');
 document.write(dog);
 */

//ejemplo variable local
/*  desabilitada error en definir persona cuando hayun error deja de hacer operaciones WTF!!!
 function  gente() {
 var persona = "Japonesa";
 document.write (persona);
 }
 gente ();
 document.write('<br>');
 document.write(persona);
 document.write('<br>');
 document.write('<br>');
 document.write('<br>');
 document.write('<br>');
 */

//Math Operators / nos da  por ejemplo 12.33333 mientras, que  % nos da el resto  ver ejemplo:
document.write("Math Operators");
document.write('<br>');
var mate = 50 + 45;
document.write(mate);
document.write('<br>');
mate++; //podemos sustraer agregando  -- o sumar ++
document.write(mate);
document.write('<br>');
var multi = 56 / 3;
document.write(multi);
document.write('<br>');
var multic = 56 % 3;
document.write(multic);
document.write('<br>');
document.write('<br>');

// Otro tipo de assigment
var operacion = 26;
operacion += 25;
document.write(operacion);
document.write('<br>');
operacion -= 15;
document.write(operacion);
document.write('<br>');
operacion *= 2;
document.write(operacion);
document.write('<br>');
operacion /= 2;
document.write(operacion);
document.write('<br>');
document.write('<br>');
document.write('<br>');
document.write('<br>');

// If  staments

document.write("Partido de futbol If stament");
document.write('<br>');
document.write("Va a imprimir segun el codigo usando == , != , < , <= , > ,<= ");
document.write('<br>');

var azules = 5;
var verdes = 6;

if (azules === verdes) {
    document.write("Empatados");
    document.write('<br>');
} else {
    document.write("Goles azul = " + azules + "  Goles verde = " + verdes);
    document.write('<br>');
}

if (azules !== verdes) {
    document.write("Marcador desigual");
    document.write('<br>');
} else {
    document.write("");
}

azules += 2;
if (azules < verdes) {
    document.write("Verde lleva la ventaja");
    document.write('<br>');
} else {
    document.write("Azul lleva la ventaja");
    document.write('<br>');
}

if (azules > verdes) {
    document.write("Azul ganador");
    document.write('<br>');
}


document.write('<br>');
document.write('<br>');
document.write('<br>');



//nesting can also use || "or"
 
 var nombre=("isaac");
 var ape1=("guadarrama");
 var ape2=("bedolla");
 
 if (nombre==="isaac"){
     if (ape1==="guadarrama"){
         if (ape2==="bedolla"){
             document.write("Isaac Guadarrama Bedolla");
         }
         
     }else{
         document.write("incorrecto");
     }
     
 }else{
     document.write("incorrecto");
 }
 
document.write('<br>');

var dia=("20");
var mes=("septiembre");
var ano=("1982");

if ( (dia==="20") && (mes==="septiembre")  && (ano==="1982") ) {
document.write( dia + mes + ano );

}




//**************************
//switch 

document.write("<br>");
document.write("<br>");

var autos=("bmw");
document.write("Guess what car i want to buy");
document.write("<br>");

switch (autos){
    
    case "mercedez":
        document.write("Nop thats no the one");
        document.write("<br>");
        break;
    case "acura":
        document.write("Nope that is no the one too");
        break;
    case "bmw":
        document.write("Yes thats the one i want  :) ");
        break;
    default :
        document.write("Good luck!!!");
        
         
}
document.write("<br>");
document.write("<br>");


//loop stament for puedo cambiar x++  x+=2,

for (x=2; x<10; x++){
    document.write("Vamos dont be lazyyyyyyyyyyyy <br>");
    
}

document.write("<br>");
document.write("<br>");



//while loop

var d=2;

while(d<=10){
    document.write(d + "  este es un ejemplo de while loop <br>");
    d++;
}

document.write("<br>");
document.write("<br>");

//DO WHILE LOOP

var b = 7;
do{
    document.write(b + " este es un ejemplo de DO WHILE LOOP <br>");
    b++;
    
}while(b<=12);

document.write("<br>");
document.write("<br>");


/*//''EVENT HANDLERS''
 *the code is in the html file alert button
 */
 
/* '' onMouseOver & onLoad ''
 * onmuoseover
 * onmouseout
 * onload
 * onunload
 */



//**************************************************************
// ' Obects Oriented '
/* segun el tuto la parte de funcion y variables va en header y  
 * document.write va el body es la parte que quermos se imprima
 */
//**************************************************************
function person(name, age){
    this.name = name;
    this.age = age;
    
}
var isaac = new person ("Isaac", 32);
var carlos = new person ("Carlos", 20);

// de forma individual

ivan = {name:"Ivan", age:30};
juana = {name:"Juana", age:30};

//'' Add method to our Objects ' functions '

function gente(name , age){
    this.name = name;
    this.age = age;
    this.yearsUntilRetire = yearsleaft;
    } 
    
 function yearsleaft (){
     var numyears = 65 - this.age;
     return numyears;
      }
 var ross = new gente ("Ross" , 26);     
 var jose = new gente ("Jose" , 28);
      


/*  '' Arrays ''   esta en el area de java 
 *  escribir con mayuscula     Array
 */
document.write("<br>");
document.write("Array");
document.write("<br>");
document.write("<br>");

var things = new Array(5);

things[0] = "contenido array 0";
things[1] = "contenido array 1";
things[2] = "contenido array 2";
things[3] = "contenido array 3";
things[4] = "contenido array 4";

document.write (things[2]);
document.write("<br>");
document.write (things[4]);
document.write("<br>");
document.write("<br>");
document.write("<br>");


/*dejar elvalor del array en blanco y asignarle los valores cuando 
 * se opcupen 
 */

var stuff = new Array();
/*
 *code 
 * code
 * code..............
 * y asignar el valor cuano se ocupe el array 
 *
 */

stuff[0] = "asignamos el valor  array 0";
stuff[1] = "tener en cuenta los indices array  1";
document.write(stuff[0]);
document.write("<br>");
document.write(stuff[1]);
document.write("<br>");
document.write("<br>");
document.write("<br>");

//Array Properties and Methods  ' concat '

var dudes = Array("Tommy", "John", "Terry");
var girls = Array("Jen", "Sara", "Melody");
document.write (dudes.length);
document.write("<br>");
document.write("<br>");
document.write("<br>");

//concat arrays

var people = dudes.concat(girls);
document.write(people[4]);
document.write("<br>");
document.write("<br>");
document.write("<br>");

/* Join , pop, reverse, push, sort  method 
 * -Join convert an array to string
 * por default apareceran separadas con  , pero aqui lo cambiamos -
 * -Pop remove the last element of the array
 * -Reverse revierte el contenido del array ej; 1-10 rev 10-1
 * -Push agrega elementos al array
 * -Sort ordena alfabeticamente el array 
 */ 

var animes = new Array("Shingeky no kyoujin", "kiseijuu", "One piece",
"Dragon ball", "Spider man");

 var string1 = animes.join(" - ");
 
 document.write(string1);
document.write("<br>");
document.write("<br>");

document.write(animes[4]);
document.write("<br>");
document.write("<br>");

animes.pop();

document.write("<br>");
document.write(animes[4]);
document.write("<br>");
document.write("<br>");

animes.push("Death of school", "Ironman");
document.write(animes);
document.write("<br>");
document.write("<br>");

animes.reverse();
document.write(animes);
document.write("<br>");
document.write("<br>");

animes.sort("-");
document.write("<br>");
document.write(animes);
document.write("<br>");
document.write("<br>");
document.write("<br>");


/*********************************************************************
 * Add elements to array using a loop
 ****************************
 ****** desabilitamos lo siguiente
 * 
 

var apodo = prompt("Enter you name:", "here!!");
document.write("El siguiente texto es el resultado del prompt enter you name");
document.write("<br>");
document.write("<br>");

document.write("Hello " + apodo);
document.write("<br>");
document.write("<br>");
document.write("<br>");


var objetos = new Array(3);
for (i=0; i<3; i++){
    objetos[i] = prompt("Add some elemnets to the Array:", "");
}
document.write("<br>");
document.write("<br>");
document.write("<br>");

document.write("Ones the elemnets are agreeged to the array it will print it out");
document.write("<br>");
document.write("Elementos del array");
document.write("<br>");
document.write("<br>");

document.write(objetos[0] + "" + objetos[1] + " " + objetos[2]);
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
**********************************
*/

//Print array elements

var nomimono = new Array("milk", "tea", "beer", "cocoa", "coffe");
nomimono.sort();

for (i=0;i<nomimono.length;i++){
    document.write(nomimono[i] + "<br>");
}
document.write("<br>");
document.write("<br>");
document.write("<br>");

// Adding caracter to an Array

var likes = new Array();
likes["auto"] = "BMW";
likes["food"] = "Sushi";
likes["job"] = "At home developing";
document.write("I want to buy an " + likes["auto"] + " working " + 
likes["job"] + " and eating " + likes["food"]);




/* Date object
 * 1000 = 1seg, lo vamos a desabilitar


function hacer(){
    document.write("Totem");
} 
setInterval("hacer()",1000);


function printTime(){
   var now = new Date(); 
   var hours = now.getHours();
   var mins = now.getMinutes();
   var seconds = now.getSeconds();
   document.write(hours+":"+mins+":"+seconds+"<br>");
    
} 
setInterval("printTime()",1000);
*/





/* Access forms from Js
 * Vamos  a atomar las form ya echas tenemos 2 form
 * la cual empezamos a contar desde 0  la cual seria form[0],form[1]
 * again solo imprime poniedo el codigo en html
 * podemos acceder a form poniedno nombre al igual que los elementos que
 * empiezan a contar desde 0, ej; elements[0]. que es lo que esta dentro de form
 * codigo en hmtl
 * 
 */

// Validation form 

function  validator(){
    if (document.test.box.checked)
    alert ("Validation function checked");
    
    else
        alert("hey is NO checked!!!!");
                
}


        
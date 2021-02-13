console.log('Hello Rafi');

....STRICT METHOD
"use strict";
MyNamae();

function MyNamae(){
    name="rafi";
}

.......SPREAD OPERATOR
let poorCountry = ['ghana', 'congo'];
let richCountry = [...poorCountry,'England', 'America'];

console.log(richCountry);


function Calculation(n1,n2,n3,n4){

    console.log(n1+n2+n3+n4);

}
Calculation(1,2,3,4);


....dynamic function

var f = function name(fullName){
    return fullName;
}
console.log(f("vaaaa"));

......var let const
const name = "rafi";
console.log(name);

....variable scope global or local

function myFun(){
   var name = "rafi";
   console.log(name);
}

myFun();

var name = "hello";

function myFun(){
    
}

console.log(name);



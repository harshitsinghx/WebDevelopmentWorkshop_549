var name="John Doe";
var age= 30;
var isEmployed=true;
console.log(name);
console.log(age);
console.log(isEmployed);

let age= 30;
console.log(age);

if(true){
    var age=30;
}
console.log(age);

if(true){
    let age=30;
}
console.log(age);

const PI= 3.14;
console.log(PI);
PI= 3.14159;
console.log(PI);

console.log(typeof name);
console.log(typeof age);
console.log(typeof isEmployed);

//Variable inside strings
let name= "Harshit";
let age1= 20;
console.log("My name is " + name + " and my age is "+ age1);
console.log(`My name is ${name} and my age is ${age1}`);

UNDEFINED- A variable that is declared but not assigned any variable
let result;
console.log(result);
console.log(typeof result);
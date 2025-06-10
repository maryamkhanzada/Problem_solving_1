 //Problem Solving Exercise 4

//Variables & Data Types What is the difference between var, let, and const?

//Difference between var, let, and const:

var	Function-scoped	 code (avoid using)
let	Block-scoped		Use for variables that change
const	Block-scoped		Use for constants

var a = 5;
let b = 10;
const c = 15;


//What are the basic data types in JavaScript? (e.g., string, number, boolean) Give examples.

let name = "Maryam"; // string

let age = 22; // number

let isStudent = true // boolean

let x;

let y = null;



//How do you check if a variable is undefined?

if (typeof myVar === "undefined") {
  console.log("Variable is undefined");
}



//Operators What is the difference between == and ===?

'5' == 5;
'5' === 5;

//How do increment (++) and decrement (--) operators work?

let number = 10;
num++;
num--;

//Functions Write a function that adds two numbers.

function add(a,b) {
  return a+b
}

//What are parameters and return values in functions?

Parameters: Inputs passed into a function (a, b)

Return value: The result a function gives back using return

//Write an example of an arrow function.
const multiply = (x, y) => x * y;

//DOM (Document Object Model) What does document.getElementById() do?

document.getElementById()
Gets an HTML element by its ID:

<p id="greeting">Hello!</p>
let element = document.getElementById("greeting");

//How do you show an alert when a button is clicked using JavaScript?
<button onclick="showMessage()">Click me</button>

<script>
  function showMessage() {
    alert("Button clicked!");
  }
</script>

//Objects Create an object with name, age, and city properties.
const person = {
  name: "Maryam",
  age: 22,
  city: "Karachi"
};
//How do you access a specific value from an object? 
console.log(person.name);  
console.log(person["city"]); 

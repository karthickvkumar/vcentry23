// Number -> Any numerical value from Positive, Negative, Fractional, Decimal

// Syntax - To create a Variable (Temp Storage)
// var variable_name = value;

// variable_name -> Any valid text, it should contains a-z, A-Z, 0-9, _, $
// value -> user input

var roll_number = 4785;
console.log(roll_number);

// String -> Any text value which is typed inside ' ' or " "
var user_email_id = "karthick12@gmail.com";
console.log(user_email_id);

// Boolean -> Either true or false
var result = true;
console.log(result);

// undefined -> Its value will not be defined
var future_value;
console.log(future_value);

roll_number = 100;
console.log(roll_number);

var first_name = "mr.abc";
var last_name = "cde";
var roll_no = 101;
var age = 24;

// Object -> It is collection of Key and Values

// syntax - Create an Object

// var variable_name = {
//   key1 : value,
//   key2 : value
// }

// key -> Similar to variable_name -> It should contains a-z, A-Z, 0-9, _, $
// value -> Number, String, Boolean, Object, Array, Function

//Group of property

var student_information = {
  first_name: "mr.abc",
  last_name: "cde",
  roll_number: 101,
  age: 24,
  future_value: undefined,
};

console.log(student_information);

// Object -> 4 operation = read value, insert new value, edit exisiting value, delete existing value

// To Read a Value -> object_variable_name.key;

console.log(student_information.first_name);
console.log(student_information.roll_number);

// To Insert a new Value -> object_variable_name.newKey = value;

student_information.blood_group = "A +ve";
student_information.location = "chennai";

// To Edit/Updated an exisiting value -> object_variable_name.existing_key = new_value;

student_information.first_name = "karthick";
student_information.last_name = "kumar";

// To delete a existing Record -> delete object_variable_name.key

delete student_information.future_value;

// Array -> It is a collection of List data with similar data type.

// Syntax of creating an Array
// var variable_name = [];  empty array

// var variable_name = [value1, value2, .. , valueN ];

// value -> Number, String, Boolean, Object, Array, Function

var list_of_mark = [70, 84, 75, 65, 42]; 

var name_list = ["william", "peter", "john", "hendry"];

var student_list = [ 
  {
    first_name: "william",
    age: 24
  },
  {
    first_name: "peter",
    age: 22
  },
  {
    first_name: "hendry",
    age: 23
  }
];

console.log(list_of_mark);
console.log(name_list);
console.log(student_list);

// Function -> Block of Code 

// Syntax for Creating a Function (Function Definition)

// function function_name(){
//   coding
// }

// function_name -> It should be a Proper text value -> a-z, A-Z, 0-9, $, _

function welcome_message(){
  var message = "Hello Everyone! Good Day";
  alert(message);
}

// Syntax for Executing/Running the Function (Function Invocation)
// function_name();

/*Type - 1
function function_name(){

}

Type -2 
var function_name = function(){

}

Type -3
Annonymous Function (Callback function)

function(){
 
}

Type -4
Arrow Function (ES6 or ES2015)

const function_name = () => {

}

Type -5
Annonymous Function (Callback function) - (ES6 or ES2015)

() => {

}

Type -6
IIFE (Immediately Invoked Function Expression)

(function(){

})();

(ES6 or ES2015)
(() => {

})();
*/

// Operation in Array -> 4 Operation = Insert a new value, Read the Value, Edit the exiting value, Delete the value

// To Read value from Array
// array_variable_name[index]

console.log(student_list[1]);

// Insert a new value into Array

// push() - Insert a new value at the end of array record
// array_variable_name.push(value_1, value_2, ... , value_n);

student_list.push({name : "karthick", age: 27});

// unshift() -> Insert a new value at the start of array record
// array_variable_name.unshift(value_1, value_2, ... , value_n);
student_list.unshift({name : "zyan", age: 22});

// To edit a existing value from Array
// array_variable_name[index] = value;

student_list[3] = {first_name : "Jordan", age : 28};

// To delete an value from Array

// pop() -> Remove a value from last of the Array
// array_variable_name.pop();

// shift() -> Remove a value from the Start of the Array
// array_variable_name.shift();

// splice() -> Remove a value from specific index of the Array
// array_variable_name.splice(index, deleteCount);
student_list.splice(2, 1);

// Operators
// 1. Arithmetic Operator  +, -, *, /, %, ++, --
// 2. Assignment Operator  =
// 3. Comparision Operator  <, <=, >, >=, ==, ===, !=, !== 
// 4. Logical Operator &&, ||, !

// && - AND
// true && true -> true
// true && false -> false
// false && true -> false
// false && false -> false

// || - OR
// true || true -> true
// false || true -> true
// true || false -> true
// false || false -> false

// ! - NOT
// ! true -> false
// ! false -> true

// Syntax - if else conditon
/*
  if(conditon) {
    // code block will execute if the condition is Truthy.
  }
  else{
    // code block will execute if the condition is Falsy.
  }
*/

/*
Problem: To find whether a person is eligible for Vote in India 
Problem Statement
1. We need to provide age(Number - Data type) as input for a program 
2. If the given age is greater than or equal to 18 -> Output - The user is eligible for Vote
3. If the given age is less then 18 -> Output - The user is not eligible for vote
*/

function check_voting_status(){
  var age = prompt("Enter a user Age");
  if(age >= 18){
    alert("The user is eligible for Vote");
  }
  else{
    alert("The user is not eligible for vote");
  }
}
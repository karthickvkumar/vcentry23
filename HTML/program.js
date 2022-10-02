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

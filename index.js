//print "Hello World!"
console.log("Hello World!");

// Type conversion
let number = "777";
let integer = 8;
let addedinteger;
addedinteger = "777" + 8; 
console.log(addedinteger);

sumintegers = Number("777") + 8; 
console.log(sumintegers);

/*Javascript Operators Assign two numeric variables a and b 
Initialise values as 5 and 10 respectively and console log 
in same order the following:
Create a variable add and assign it the sum of a and b.
Create a variable sub and assign it result of b subtracted from a.
Create a variable mul and assign it the product of a and b.
Create a variable div and assign it the result of of a divided by b.
Create a variable inc and assign it the preincremented value of a.
Create a variable dec and assign it the predecremented value of b.
*/

var a=5;
var b=10;
var add=a+b;
var sub=a-b;
var mul=a*b;
var div=a/b;
var inc=++a;
var dec=--b;
console.log(add);
console.log(sub);
console.log(mul);
console.log(div);
console.log(inc);
console.log(dec);

/*
Javascript String Assign "Learning Javascript with AlmaBetter" 
to variable test and perform following

1.Console log the length of string
2.Extract "AlmaBetter" from string using slice() and
 console log it
3.Replace "Javascript" with "Web3.0" in test and
 console log it
4.Convert test to upper case using built in function and
 console log it
5.Concat "Web3.0 is future" to test and console log it
*/

var str="Learning Javascript with AlmaBetter";
console.log(str.length);
console.log(str.slice(25,35));
console.log(str.replace("Javascript" , "Web3.0"));
console.log(str.toUpperCase());
console.log(str.concat("Web3.0 is future"));
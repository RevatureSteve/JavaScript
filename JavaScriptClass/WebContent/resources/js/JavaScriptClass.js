/**
 *  JavaScript Week
 */
//Global variables
var a, b, c, d, e, f, g, h, i;
a = 10;				//Number
b = "10";			//String
c = true;			//boolean
d = {};				//instanceof, typeof Object
e = null;			//instanceof Null, typeof Object
//f					//undefined
g = (0/0);			//NaN
h = [];				//Object
i = function(){};	//function

//typeof operator returns type
/*
 * typeof a returns "number"
 * typeof b returns "string"
 * etc
 */
/*


//---------------------------Strings are immutable
var cantChangeStrings = "cantChangeStrings";
function changeString(myVar){
	console.log(myVar = "CHANGED");
	
}

//---------------------------String length
//var x = "hello"
//x.length


//---------------------------Type coercion
//5 == "5" 		-true
//5 === "5" 	-false

//0 == false 	-true
//0 === false	-false

// 5 != "5"		-false
// 5 !== "5"	-true

//------------new boolean
//var x  = new Boolean(false);
/*
function doubleEquals(a,b){
	if(a == b){
		return true;
	}else{
		return false;
	}
}

function doubleEquals(a,b){
	console.log(this.name);
	return a == b; //1 liner
}
*/
/*
function tripleEquals(a,b){
	return a === b; //1 liner
}
*/


//--------------------------- + operator
//var x = 5 + 6; -> number
//x = 5 + 6 + " hello"; -> 11 hello
//x = "" + 5 + 6 + " hello"; -> 56 hello
//x = +"42"

//--------------------------- !! produces boolean value
//--------------------------- Truthy/Falsy
//!!42
//x = ""
//!!x

//--------------------------- if statement
/*
 * if(a){ "truthy";}else{ "falsy";}
 */

//---------------------------implied global
/*
function incrementA(){
	a +=1;
	return a;
}


//---------------------------Hoisting
function hoisting(num){
	xyz = num;
	return xyz;
	//var xyz;
}


//---------------------------Semicolon injection

function semicolonInjection(){
	var x = true;
	return 
			x;
}

//---------------------------Return && Gaurd Operator

function gaurdOperator(myVar){
	return myVar && "2nd";	 //first statement true 
										 //return second statement 
}
//try !myVar
function defaultOperator(myVar){
	return myVar || "2nd";	//first statement true 
										//return first statement
}



//---------------------------Objects
var book = {
		title:"harry potter",
		year: 2001,
		author: {
			name: "JK",
			dob: 1965
		}
};
/*
var book = {
		author: {
			name: "JK",
			dob: 1965
		}
}

//---------------------------No method Overloading
function sumNum(x,y,z){
	console.log(z);
	return x+y;
}
*/
//function sumNum(){
//	return x+y;
//}
/*
 * 
 
//---------------------------Arguments Object
function iTakeNoArgs(){
	console.log(arguments.length);
	return arguments[0]+arguments[1];
}
*/
/*
//function inside of an object
var fooOutter = {
		fooInner :function fooInner(){
		return "foo Inner";
	}
}
*/
/*
function foo(){
	return "I am invoked!";
	*//* 4 ways to invoke a function
		foo(myObject, [a,b]);							//Function form
		obj.foo();						//Method forms
		obj["foo"](); 
		new foo(); 						//constructor form
		foo.apply(obj, arguements); 	//Apply form 
	*/ /*
}*/
/*
var arr = [2,"2"];
var myObject = {
			name:"myObject"
}								//Apply example
 doubleEquals.apply(myObject,arr);
*/
//---------------------------Closure JS version of Encapsulation
/*
 * The scope that an inner function enjoys continues 
 * even after the outer functions have returned
 * Called - Closure
 */
/*
var count = 0;
function makeCarCounter(){
	var carCount = 0;
	function counter(){
		carCount += 1;
		return carCount;
	}
	return counter;
}

function makeDogCounter(){
	var dogCount = 0;
	function counter(){
		dogCount += 1;
		return dogCount;
	}
	return counter;
}
//Closure!
function makeCounter(noun){
	var count = 0;
	var myObject = {
			foo: function(){
				return count;
			}
	}
	return function(){
		
		return ++count + " " + noun;
	}
}

*/
/*
//---------------------------Constructor
function Person(name,age){
	this.name = name;
	this.age = age;
	//Constructors are Cap
}

//---------------------------MakerFunction
function makerObjectFoo(name,age){
	var person = {}
	person.name = name; 	//dot notation
	person["age"] = age; 	//subscript
	return person;
}
*/




/*
//var steve = new Person("Steven","Kelsey");
function Person(firstname,lastname){
	this.firstname = firstname;
	this.lastname = lastname;
}
//Note use instanceof operator verse typeof here
function SuperPerson(firstname, lastname, strength, ability){
	Person.call(this,firstname,lastname);
	this.strength = strength;
	this.ability = ability;
}


//adding liftCar method
SuperPerson.prototype.liftCar = function(){
	//isLiftingCar property
	this.isLiftingCar = true;
}

//add putDown car method
SuperPerson.prototype.putDownCar = function(){
	//isLiftingCar property
	this.isLiftingCar = false;
}


//---------------------------Add a reverse to all strings
function addReverseToStringsPrototypal(){
	String.prototype.reverse = function(){
		return this.split('').reverse().join('');
	}
}

String.prototype.reverse = function(){
	return this.split('').reverse().join('');
}
*/

//Bubble vs Capture
var idx = 0;

function handler(event){
	console.log("%s--%s", idx++,this, event);
	event.stopPropagation();
}
//onload will load javascript finished rendering
window.onload = function(){
								//false uses bubbling
								//true uses capture
	document.getElementById("outer").addEventListener('click', handler, false);
	document.getElementById("inner").addEventListener('click', handler, false);
	document.getElementById("innerMost").addEventListener('click', handler, false);
}//----------------------------------------------------------------------------
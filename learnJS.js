// Keywords in JavaScript -
// await	break	case	catch	class
// const	continue	debugger	default	delete
// do	else	enum	export	extends
// false	finally	for	function	if
// implements	import	in	instanceof	interface
// let	new	null	package	private
// protected	public	return	super	switch
// static	this	throw	try	true
// typeof	var	void	while	with yield


// Girraj Kushwah
// var myNumber=9876543210;
// var myName="Girraj";
// console.log(isNaN(myNumber));
// console.log(isNaN(myName));
// if(isNaN(myName)){
//     console.log("please enter a valid mobile number");
// }



// console.log(NaN===NaN);                                             // #dobut
// console.log(Number.NaN===NaN);
// console.log(isNaN(NaN));
// console.log(isNaN(Number.NaN));
// console.log(Number.isNaN(NaN));



// 1. Assignment operator -
// var x=5;
// var y=5;
// console.log("both the x and y are same= "+ x==y);
// console.log("both the x and y are same= "+ (x==y));

// 2. Arithmetic operator -
// console.log(5+5);
// console.log(10-5);
// console.log(5*5);
// console.log(12/2);
// console.log(25%6);

// increment and decrement operators -
// post increment
// var num=10;
// var newNum=num++;
// console.log(num);
// console.log(newNum);

//pre increment
// var num=10;
// var newNum=++num;
// console.log(num);
// console.log(newNum);

// 3. Comparison operator -
// var p=10;
// var q=20;
// console.log(p==q);
// console.log(p!=q);
// console.log(q>p);
// console.log(q>=p);
// console.log(p<q);
// console.log(p<=q);

// 4. Logical operators -
// Logical AND(&&) OR(||) Not(!) operator

// var x=30;
// var y=-20;
// console.log(x>y&&y>0);
// console.log(x>20||y>0||y<-10);
// console.log(!(x>35||y>5||y<-50));
// console.log(!true);



// #Problems -
//sol1
// console.log(3**3); // means 3 to the power 3
// console.log(10**-1);

// sol2
// console.log(33+" Girraj");

//sol3
// var i=10;
// var j=15;
// var c=j;
// j=i;
// i=c;
// console.log("value of i is "+i+" and value of j is "+j);

//sol4
// var i=10;
// var j=15;
// i=i+j;
// j=i-j;
// i=i-j;
// console.log("value of i is "+i+" and value of j is "+j);



// #problem -
// var year=2024;
// debugger;
// if(year%4===0){
//     if(year%100===0){
//         if(year%400===0){
//             console.log("it is a leap year");
//         }else{
//             console.log("it is not leap year");
//         }
//     }else{
//         console.log("it is leap year");
//     }
// }else{
//     console.log("it is not a leap year");
// }



// # problem -(truthy and falsy value in js)
// there are 5 falsy values in js are-
//  0,"",undefined,null,NaN
// and false is also a falsy value (common sense)
// if we enter any other value then our condition will become true

// if(score=0){
//     console.log("shit, we loss the game");
// }else{
//     console.log("yea, we won the match");
// }

// # Ternary operator -
// var age=20;
// console.log(age>=18?"you can vote":"you can't vote");

// nested if else -
// var area="square";
// var pi=3.142, l=5, b=4, r=3;
// if(area=="circle"){
//     console.log("area of circle is "+pi*r**2);
// }else if(area=="rectangle"){
//     console.log("area of rectangle is "+l*b);
// }else if(area=="square"){
//     console.log("area of square is "+l**2);
// }else{
//     console.log("please enter valid data");
// }



// switch case -
// var area="myapp";
// var pi=3.142, l=5, b=4, r=3;
// switch(area){
//     case "circle":
//         console.log("area of circle is "+pi*r**2);
//         break;
//     case "rectangle":
//         console.log("area of rectangle is "+l*b);
//         break;
//     case "square":
//         console.log("area of square is "+l**2);
//         break;
//     default:
//         console.log("please enter valid data");
// }

// while loop(entry control loop) -
// var num=0;
// while(num<=10){
//     console.log(num);
//     num++;
// }

// do-while loop(exit control loop) -
// var num=0;
// do{
//     console.log(num);
//     num++;
// }while(num<=10);

// for loop(entry control loop) -
// for(var num=0;num<=10;num++){
//     console.log(num);
// }

// # problem - (table printing using loop)
// var tableof=10;
// for(var num=1;num<=10;num++){
//     console.log(tableof+"*"+num+" = "+tableof*num);
// }

// functions -

// function sum(){
//     var a=5, b=10;
//     return a+b;
// }
// console.log(sum());

// function sum(a,b){
//     var total=a+b;
//     console.log("summation is "+total);
// }
// sum(10,20); // function arguments
// sum(50,100);

// function expression -
// var summation=function sum(a,b){
//     return a+b;
// }
// var result=summation(23,10);
// console.log("the result is "+result);

// Anonymous function -
// var funExp=function (a,b){
//     return a+b;
// }
// var sum=funExp(23,10);
// console.log("sum is "+sum);
// console.log("the sum is "+funExp);

// Question -
// var funExp=function (a,b){
//     return a+b;
// }
// var sum1=funExp(10,20);
// var sum2=funExp(10,30);
// console.log(sum1<sum2);

// ECMAScript 2015 (ES6) -

// 1. var, let & const -

// function bioData(){
//     var name="Girraj";
//     console.log("my name is "+name);
//     if(true){
//         var lname="Kushwah";
//         console.log("last name is "+lname);
//         console.log("name is "+name);
//     }
//     console.log("last name is "+lname);
// }
// bioData();

// function bioData(){
//     let name="Girraj";
//     console.log("my name is "+name);
//     if(true){
//         let lname="Kushwah";
//         console.log("last name is "+lname);
//         console.log("name is "+name);
//     }
//     console.log("last name is "+lname);
// }
// bioData();

// function bioData(){
//     const name="Girraj";
//     console.log("my name is "+name);
//     if(true){
//         const lname="Kushwah";
//         console.log("last name is "+lname);
//         console.log("name is "+name);
//     }
//     console.log("last name is "+lname);
// }
// bioData();

// const myName="Girraj";
// console.log(myName);
// myName="kushwah";
// console.log(myName);

// 2. Template Literals -
// for(let num=1;num<=10;num++){
//     let tableof=5;
//     console.log(`${tableof}*${num}= ${tableof*num}`);
// }

// 3. Default Arguments -
// function mult(a,b=5){
//     return a*b;
// }
// console.log(mult(6));

// 4. REST operator 5. Destructuring 6. object properties

// 7. Fat Arrow function -

// -> Normal way of writing a function -
// console.log(abc());
// function abc(){
//     let a=10,b=22;
//     return `the value is ${a+b}`;
// }

//-> Fat Arrow function -

// const sum=()=>`the value is ${(a=30)+(b=3)}`;
// console.log(sum());

// 8. SPREAD operator



// Arrays in javascript -

// let myArray=new Array(); // optional
// Example -
// myArray=["Girraj",20,true,"Tushar",21,false];
// for(let i=0;i<myArray.length;i++){
//     console.log(myArray[i]);
// }

// for in loop -
// myArray=["Girraj",20,true,"Tushar",21,false];
// for(let elements in myArray){
//     console.log(elements);
// }

// for of loop -
// myArray=["Girraj",20,true,"Tushar",21,false];
// for(let elements of myArray){
//     console.log(elements);
// }

// forEach
// myArray=["Girraj",20,true,"Tushar",21,false];
// myArray.forEach(function(element,index,array){
//     console.log(`${element} ${index}`);
// })

//  Array Methods -

// array.length property returns length of the array

// 1. indexOf()                            // returns -1 of none found
// myArray=["Girraj",20,true,"Tushar",21,false];
// console.log(myArray.indexOf(false,3));

// 2. lastIndexOf()               // retuns -1 if none found
// let myArray=["Girraj",20,true,"Tushar",21,false];
// console.log(myArray.lastIndexOf(true));
// let myArray=["ankit","girraj","arun","ankit","sankalp"];
// console.log(myArray.lastIndexOf("ankit",2));

// 3. includes() // returns true or false after searching array
// myArray=["ankit","girraj","arun","sankalp","vivek"];
// console.log(myArray.includes("arun"));

// 4. find()          // returns only 1 value and returns undefined if none found
// const price = [100,150,200,300,400,500,550,660,700];
// findElem=price.find((value)=>value<400)
// console.log(findElem);

// console.log(price.find((value)=>value<400)); //solved in one line

// 5.  findIndex()  // returns 1 value and returns -1 if none found
// let myArray=[100,150,200,300,400,500,550,660,700];
// console.log(myArray.findIndex((element)=>element<500));

// 6. filter() //returns all satisfied value in new array and returns empty array [] if none found
// let myArray=[100,150,200,300,400,500,550,660,700];
// console.log(myArray.filter((element,index)=>element<500));

// let array=myArray.filter((element,index)=> element>500);
// console.log(array);

// 7. sort() // sort the elements alphabetically that's why creates problem with numbers
// let myArray=["ankit","girraj","arun","ankit","sankalp"];
// console.log(myArray.sort());
// let myArray=[10,10000,25,150,89,750];
// console.log(myArray.sort());

// 8. push() // add elements at the end of array and returns the new length of array
// let myArray=["ankit","girraj","arun","ankit","sankalp"];
// const count=myArray.push("jajpal","jeetendra")
// console.log(count);
// console.log(myArray);

// 9. unshift() // add elements at the end of array and returns the new length of array
// let myArray=["ankit","girraj","arun","ankit","sankalp"];
// const count=myArray.unshift("jajpal","jeetendra");
// console.log(count);
// console.log(myArray);

// 10. pop() // removes last element from array and returns it and changes the length of the array
// let myArray=["ankit","girraj","arun","ankit","sankalp"];
// console.log(myArray);
// console.log(myArray.pop());
// console.log(myArray);

// 11. shift() // removes first element from array and returns it and changes the length of array
// let myArray=["ankit","girraj","arun","ankit","sankalp"];
// console.log(myArray);
// console.log(myArray.shift());
// console.log(myArray);

// 12. Challenge Time (use splice method) // retuns deleted data in a new array otherwise empty array if not deleted

// sol1:
// let myArray=["Jan","march","April","June","July"];
// const month=myArray.splice(myArray.length,0,"Dec");
// console.log(myArray);

// sol2:
// let myArray=["Jan","march","April","June","July"];
// const month=myArray.splice(myArray.length,0,"Dec");
// console.log(month);

// sol3:
// let myArray=["Jan","march","April","June","July"];
// const month=myArray.splice(1,1,"March");
// console.log(myArray);

// const Indexmonth=myArray.indexOf("march");
// if(Indexmonth!=-1){
// const month=myArray.splice(Indexmonth,1,"March");
// console.log(myArray);
// }else{
//     console.log("No such data found");
// }

// sol4:
// let myArray=["Jan","march","April","June","July"];
// const Indexmonth=myArray.indexOf("June");
// if(Indexmonth!=-1){
//     const month=myArray.splice(Indexmonth,1);
//     console.log(month);
//     console.log(myArray);
// }else{
//     console.log("data not found")
// }

// deleting multiple data from a specific index -
// let myArray=["Jan","march","April","June","July"];
// const Indexmonth=myArray.indexOf("April");
// if(Indexmonth!=-1){
//     const month=myArray.splice(Indexmonth,Infinity);
//     console.log(month);
//     console.log(myArray);
// }else{
//     console.log("data not found")
// }

// 13. map() // returns the result in new array with true false values
// let Arr=[1,13,17,25,31];
// let newArr=Arr.map((element,index,array)=>{return element>17});
// let newArr2=Arr.map((elem,ind,ar)=>{return `value is ${elem} and index ${ind} and array ${ar}`});
// console.log(Arr);
// console.log(newArr);
// console.log(newArr2);

// challenge time

// sol1 -
// let myArr=[25,36,49,64,81];
// let arrsqrt=myArr.map((element)=>{return Math.sqrt(element)});
// console.log(arrsqrt);

// sol2 - // map is chainable method, we can use other methods with map method
// let Arr1=[2,3,4,6,8];
// let Arr2=Arr1.map((element)=>element*2).filter((element)=>element>10).reduce((accumulator,element,index,array)=>{return accumulator+=element});
// console.log(Arr2);

// 14. reduce()
// let myAr=[5,10,15,20];
// const newMyAr=myAr.reduce((accumulator,element,index,array)=>{return accumulator+=element});
// console.log(newMyAr);

// function myFunc(sum, num) {
//    // console.log(total)
//     return sum-num;
//   }

// -> Array flat in js -
// const myArr=[
//   ["zone1","zone2"],
//   ["zone3","zone4"],
//   ["zone5","zone6"],
//   ["zone7","zone8"]
// ]
// const flatarr=myArr.reduce((accumulator,element)=>{return accumulator.concat(element)});
// console.log(flatarr);

// const myArr=[
//   ["zone1","zone2"],
//   ["zone3","zone4"],
//   ["zone5","zone6"],
//   ["zone7",["zone8","zone9"]] // does not flatten this line
// ]



// Strings in javascript -
// let myName="Girraj Kushwah";
// let fname=new String("Tushar"); // creating string by String class constructor String()
// console.log(myName);
// console.log(fname);

// 1. string.length propertry returns the length of the given string.
// let myName="Girraj Kushwah";
// console.log(myName.length);

// 2. Escape character//backslash \ escape character turns special characters into string characters
// let anyquery="we are called \"indians\" form Asia"
// console.log(anyquery);

// if you don't want to mess, simply use alternative quotes
// let anyquery="we are called 'indians' form Asia"
// console.log(anyquery);

// let anyquery='we are called "indians" form Asia'
// console.log(anyquery);

// 3. indexOf() // returns address of first occurence of character and -1 when nothing found
// let sentence="i am girraj,i am student";
// console.log(sentence.indexOf("am"));

// let sentence="i am girraj,i am student";
// console.log(sentence.indexOf("am",5));

// 4. lastIndexOf() // returns -1 if not found
// let sentence="i am girraj,i am student"; // returns -1 when nothing found
// console.log(sentence.lastIndexOf("student",11));

// 5. search() // returns -1 if not found and it can't take second start position argument
// let sentence="i am girraj,i am student";
// console.log(sentence.search("student"));

// there are 3 methods for extracting a part of a string:
// slice(start,end) and substring(start,end) and substr(start,length)

// 6. slice() // extracts a part of string and returns the extracted part in new string, end parameter not necessary but start parameter is necessary.
// The slice() method selects the elements starting at the given start argument,and ends at end argument but does not include the given end argument.

// let str="apple, banana, orange";
// let response=str.slice(0,4);
// console.log(response);

// let response=str.slice(7,-2);
// console.log(response);

// let response=str.slice(7);
// console.log(response);

// challenge time
// let mytweets="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc congue nisi vitae suscipit tellus mauris a diam. Vitae aliquet nec ullamcorper sit amet risus nullam eget felis. At ultrices mi tempus imperdiet nulla malesuada pellentet."
// let actualtweets=mytweets.slice(0,280);
// console.log(actualtweets);
// console.log(actualtweets.length);

// 7. substring() // same as slice() but it cannot accept -ve indexes. if we give -ve value then characters are counted from 0th position.
// let str="apple, banana, orange";
// let response=str.substring(7,-2);
// console.log(response);

// 8. substr() // similar to slice() and the second parameter specifies the length of the extracted part and it cannot accept -ve indexes
// let str="apple, banana, orange";
// // let response=str.substr(7,-2);
// let response=str.substr(-6);
// console.log(response);

// Replacing string content -
// 9. replace(searchfor,replacewith)
// returns result in new string and by default it replaces only first match and is case sensitive
// let bio=`i am girraj kushwah girraj`;
// let replaceData=bio.replace("girraj","Girraj");
// console.log(replaceData);

// Extracting string characters -
// there are 3 methods for extracting string string characters:
// charAt(position) and charCodeAt(position) and Property access [ ]

// 10. charAt() // returns the character at a specified index in a string
// let str="hello world";
// console.log(str.charAt(6));

// 11. char CodeAt() // returns the unicode of the character at a specified index in a string
// it returns a UTF-16 code (integer between 0 to 65535)
// let str="hello world";
// console.log(str.charCodeAt(0));

// challenge time -
// let str="hello world";
// let lastchar=str.length-1;
// console.log(str.charCodeAt(lastchar));

// property access // ECMA5 (2009) allows property access in strings
// let str="hello baby";
// console.log(str[6]);

// other useful methods -
// 12. toUpperCase() and toLowerCase()
// let str="Girraj Kushwah";
// console.log(str.toUpperCase());
// console.log(str.toLocaleLowerCase());

// 13. concat() // joins two or more strings
// let fname="girraj";
// let lname="kushwah";
// console.log(fname + lname);  // other way
// console.log(`${fname} ${lname}`); // other way
// console.log(fname.concat(lname));
// console.log(fname.concat(" ",lname));

// 14. trim() // it removes whitespaces from both sides fo a string
// let str="      girraj kushwah    ";
// console.log(str.trim());

// 15. split() // it converts string to an array
// let str="a ,b,c ,d,e";
// let str2="a,b,|c,d|,e";
// console.log(str.split(","));
// console.log(str.split(" "));
// console.log(str2.split("|"));



// date & time in javascript -
// date methods(get and set)
// time methods(get and set)
// JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects contain a Number that represents milliseconds since 1 January 1970 UTC.

// creating Date objects -
// there are 4 ways to create a new date object:

// -> new Date()

// -> new Date(year,month,day,hours,minutes,seconds,milliseconds);
// it takes maximum 7 arguments and minimum 2 arguments i.e., year and month

// -> new Date(milliseconds)
// we cannot avoid month section

// -> new Date(date string)

// 1. new Date() // creating Date object with Date() constructor of Date class
// let currdate=new Date();
// console.log(currdate);
// //console.log(new Date());
// console.log(new Date().toLocaleString());
// console.log(new Date().toString());
// console.log(new Date().toLocaleDateString());
// console.log(new Date().toLocaleTimeString());

// 2. Date.now() // returns no. of milliseconds elapsed since january 1, 1997
// console.log(Date.now());

// 3. new date(year,month,day,hours,minutes,seconds,milliseconds)
// let d=new Date(2022,0,6,20,30,10);
// let d2=new Date(2023,3,6,00,00,01)
// console.log(d.toLocaleString());
// console.log(d2.toLocaleString());

// 4. new Date(dateString) // creates a new date object form a date string
// let d=new Date("april 6, 2023 6:05:00");
// console.log(d.toLocaleString());

// 5. new Date(milliseconds)
// let d1=new Date(0);
// let d1=new Date(86400000);
// let d1=new Date(86400000*2)
// let d1=new Date(1664358046892);
// console.log(d1.toLocaleString());

// 6. Dates methods -
// const currdate=new Date();
// console.log(currdate.toLocaleString());
// console.log(currdate.getFullYear());
// console.log(currdate.getMonth());
// console.log(currdate.getDate());
// console.log(currdate.getDay());

// How to set individual date?
// const currdate=new Date();
// // currdate.setFullYear(2021,10,6);
// // the setFullYear() method can optionally set month and date
// currdate.setFullYear(2024);
// currdate.setMonth(3);
// currdate.setDate(6);
// console.log(currdate.getFullYear());
// console.log(currdate.getMonth());
// console.log(currdate.getDate());

// 7. Time Methods -
// How to get the individual time
// const currtime=new Date();
// console.log(currtime.getTime());
// // getTime() returns the number of milliseconds since January 1, 1970 00:00:00
// console.log(currtime.getHours());
// // getHours() returns the hour (0 to 23) of a date
// console.log(currtime.getMinutes());
// console.log(currtime.getSeconds());
// console.log(currtime.getMilliseconds());

// How to set the individual time?
// const currtime=new Date();
// console.log(currtime.setTime());
// console.log(currtime.setHours());
// console.log(currtime.setMinutes());
// console.log(currtime.setSeconds());
// console.log(currtime.setMilliseconds());



// JavaScript Math object -
// allows to perform mathematical tasks on numbers
// console.log(Math.PI);

// let num=33.5;
// console.log(Math.round(num));

// console.log(2**3);
// console.log(Math.pow(2,3));

// console.log(Math.sqrt(25));
// console.log(Math.sqrt(81));
// console.log(Math.sqrt(66));

// console.log(Math.abs(-25));
// console.log(Math.abs(-25.5));
// console.log(Math.abs(-999));
// console.log(Math.abs(4-6));

// console.log(Math.ceil(25.1));
// console.log(Math.ceil(25.9));

// console.log(Math.floor(25.9));
// console.log(Math.floor(25.01));

// console.log(Math.min(25,50,75,77,85,-15,-30,-80));
// console.log(Math.max(25,50,75,77,85,-15,-30,-80));

// console.log(Math.random());
// console.log(Math.floor(Math.random()*10));

// console.log(Math.trunc(-99.56));
// console.log(Math.trunc(5.6));



// DOM in javascript -

// window vs document
// DOM vs BOM
// DOM navigation
// Searching and getting elements reference

// alert(location.href);
// if(confirm("want to visit facebook.com")){
//     location.href="https://www.facebook.com";
// }



// Events in javascript -

// 4 ways of writing events in javascript
// what is event object
// MouseEvent in javascript
// KeyboardEvent in javascript
// InputEvents in javascript
// Timing based Events in javascript

// 4 ways of writing events in javascript -

// 1. using inline events alert();
// 2. by calling a function (most common way of writing)
// 3. using inline events (HTML onclick="" property and element.onclick)
// 4. using event listeners (addEventListeners and IE's attachEvent) // being popular now a days

// what is event object?
// Event object is the parent object of the event objects
// event,event.target,event.type...

// MouseEvent in javascript
// MouseEvent object
// Events that occur when the mouse interacts with html document belong to that MouseEvent object
// onmouseup,onmousedown,mouseenter,mouseleave...

// KeyboardEvent in javascript
// Events that occur when user presses a key on the keyboard
// belongs to the keyboard event object
// onkeypress, onkeydown, (onkeyup - ?)...

// InputEvents in javascript
// the onchange event ocurs when the value of an element has een changed
// for radio buttons and checkboxes, the onchange event occurs when the checked state has been changed
// onchange

// que. what is the difference between onclick and addEventListener?
// ans- onclick is event and addEventListener used to fire events.
// addEventListener does not overwrite existing event handlers.
// whereas onclick overrides any existing onclick = fn handlers.

// timing based Events in javascript
// setTimeout(),setInterval(),clearTimeout(),clearInterval()



// OOPS in javascript

// object literals
// it is simply a key:value pair data structure
// storing variables and functions together in one container

// this object
// the definition of "this" object is that it contain the current context.
// the this object can have different values depending on where it is placed.

// examples :
// it refers to the current context and that is window global object.
// console.log(this);
// console.log(this.alert("hello js"));
// if we use this inside a method then it refers to the global object and access the properties of the global object by using dot operator.
// if we use this inside a method but inside the object then it will refers to the to the object and can access the properties of that object.
// we cannot use this with arrow method. suppose, if we use this inside an arrow method inside the object then it will refers to the global object and can't access object's properties.



// ECMAScript 2015/ES6

// Destructuring in ES6
// Array destructuring & object destructuring

// Array destructuring -
// let myarr=["Girraj","Kushwah",20];
// // let myname=myarr[0];
// // let lname=myarr[1];
// // let age=myarr[2];
// // console.log(myname);
// // console.log(lname);
// // console.log(age);
// let [myname,lname,age,degree="BTech"]=myarr;
// console.log(degree);

// Object destructuring -
// let obj1={
//     myname:"Girraj",
//     lname:"Kushwah",
//     age:20
// }
// // let fname=obj1.myname;
// // let lastname=obj1.lname;
// // let myage=obj1.age;
// // console.log(myage);
// let {myname,lname,age,degree="BTech"}=obj1;
// console.log(myname);

// Object properties (ES6)
// we can use now dynamic properties

// let myname="Girraj";
// const mybio={
//     [myname]:"hello, how are you",
//     [30+3]:"is my roll no."
// }
// console.log(mybio);

// no need to write key and value, if both are same.
// let myname="Girraj";
// let myage=20;
// const mybio={myname,myage} // we can replace this code with {myname:myname,myage:myage}
// console.log(mybio);

// Spread Operator (ES6)
// let arr1=['red','green','blue','yellow'];
// let arr2=[...arr1,'pink','white'];
// console.log(arr2);



// ECMAScript 2016/ES7
// Array.prototype.includes
// Exponentiation Operator

// Array includes
// const colors=['red','blue','green','yellow'];
// const isPresent=colors.includes('green');
// console.log(isPresent);

// Exponentiation Operator (**)
// console.log(2**4);

// ECMAScript 2017/ES8
// string padding
// object.values()
// object.entires()

// let myname="Girraj".padStart(10);
// console.log(myname);
// let newname="Abhishek".padEnd(10);
// console.log(newname);

// Object.values & Object.entries
// let obj1={myname:"Girraj",lname:"Kushwah",age:20};
// let obj2={...obj1,degree:"CS"};
// console.log(Object.values(obj1));
// console.log(Object.values(obj2));
// console.log(Object.entries(obj1));
// console.log(Object.entries(obj2));

// ECMAScript2018/ES9

// ECMAScript2019/ES10
// Array.prototype.{flat,flatmap}
// Object.fromEntries()

// let myArr=[
//     ["zone1","zone2"],
//     ["zone3","zone4"],
//     ["zone5","zone6"],
//     ["zone7",["zone8","zone9"]]
// ]
// console.log(myArr.flat(2)); // infinity can passed in the parameter of flat to completely flat array

// let obj1={myname:"Girraj",lname:"Kushwah",age:20};
// let arrdata=Object.entries(obj1);
// console.log(Object.fromEntries(arrdata));
// console.log(Object.entries(obj1));

// ECMAScript2020/ES11
// bigint (MAX_SAFE_INTEGER property used)
// nullish coalescing (??)
// and some more features

// let a=Number.MAX_SAFE_INTEGER;
// console.log(a);
// console.log(9007199254740991+900); // wrong calculation
// console.log(9007199254740991n+20n) // using bigint and getting correct result

// let check=false ?? 'truthy value';
// console.log(check);



// ECMAScript2014/ES5
// "use strict";
// let x=33;
// console.log(x);



// Advanced JavaScript
// Event Propagation (Event Bubbling & Event Capturing)
// Higer order function
// Callback Function
// Function Currying (after Async JS section)
// Callback Hell
// AJAX call using XMLHttprequest
// JSON
// Fetch API
// Promises
// Async-Await
// Error Handling in JS

// Event Propagation, Event Bubbling & Event Capturing?
// Event bubbling and capturing are two ways of event propagation in the HTML DOM API, when an event occurs in an element inside another element, and both elements have registered a handle for that event.
// the Event propagation mode determines in which order the elements receive the event
// Propagation is Broadly categorized into 3 main types -
// 1. the capture phase- going from window to the event target phase
// 2. the bubble phase- from the event target parent back to the window
// 3. the target phase- it is the target phase

// Event bubbling - with event bubbling, the event is first captured and handled by the innermost element and then propagated to outer elements.

// Event capturing - with event capturing, the event is first captured by the outermost element and propagated to the inner elements. capturing is also called 'trickling' which helps remember the propagation order.

// Higher order function
// function which takes another function as an argument is called Higher order function. ????

// Callback function
// function which get passed as an argument to another function is called callback function.
// a callback function is a function that is passed as an argument to another function, to be "called back" at a later time.

// const add= (a,b)=>a+b;
// const subs=(a,b)=>a-b;
// const mult=(a,b)=>a*b;
// const calculator=(a,b,callbackfun)=>callbackfun(a,b);
// console.log(calculator(10,6,subs));



// Asynchronous JavaScript
// How javascript works and Asynchronous JavaScript -
// 1. Hoisting in JavaScript
// 2. Scope chain
// 3. Lexical Scoping in JavaScript
// 4. Use Strict Mode
// 5. This Keyword
// 6. Closures in JavaScript
// 7. What is Asynchronous JavaScript Programming?
// 8. what is Event Loop?

// Hoisting in JavaScript
// we have creation phase and execution phase after pressing enter for running a code.
// a mechanism where variables and functions declarations are moved to the top of their scope before the code execute.

// console.log(myname);
// var myname;
// myname="Girraj";

// How it will be in output during creation phase-
// // var myname=undefined;
// // console.log(myname);
// // myname="Girraj";

// In ECMAScript2015, hoisting ki watt lag gyi
// In ECMAScript2015, hoisting is avoided by using the let and const keyword instead of var.

// Scope Chain and Lexical Scoping in javascript
// scope chain is used to resolve the values of variable names in js
// scope chain in js is lexically defined, which means that we can see what the scope chain will be by looking at the code
// at the top, we have the global scope, which is the window object in the browser

// lexical scoping means now, the inner function can get access to their parent functions variables but the vice versa is not true

// let a='hello guys.. '; // global scope
// const first=()=>{
//     let b="how are you? ";
//     const second=()=>{
//         let c="hi, am fine.. thank you";
//         console.log(a+b+c);
//     }
//     second();
//     // console.log(a+b+c);
// }
// first();

// Closures in JavaScript
// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment)
// in other words, a closure gives you access to an outer function's scope from an inner function.
// in js, closures are created every time a function is created, at function creation time.
// it is same like lexical scoping

// const first=(a)=>{
//     let b=10;
//     const second=()=>console.log(a+b);
//     second();
//     // console.log(a+b+c);
// }
// first(5);

// somewhere in the memory, value of a and b is stored in the closure and we will get the value from there.

// const outerfun=(a)=>{
//     let b=10;
//     const innerfun=()=>{
//         let sum=a+b;
//         console.log(sum);
//     }
//     return innerfun;
// }
// let checkclosure=outerfun(5);
// checkclosure();
// // console.dir(checkclosure);

// "use strict";

// x="Girraj";
// console.log(x);

// let x="Girraj";
// console.log(x);


// What is Asynchronous JavaScript Programming?
// synchronous programming -
// const fun2=()=>{
//     console.log('function 2 call');
// }
// const fun1=()=>{
//     console.log("function 1 call");
//     fun2();
//     console.log("fun 1 call again");
// }
// fun1();

// Asynchronous programming -
// const fun2=()=>{
//     setTimeout(()=>{
//         console.log('function 2 call');
//     },2000);
// }
// const fun1=()=>{
//     console.log("function 1 call");
//     fun2();
//     console.log("fun 1 call again");
// }
// fun1();

// Event Loop in JavaScript
// -> global execution stack/context, web API's, messege queue


// Function Currying -
// sum(5)(10)(15)

// function sum(num1){
//     return function(num2){
//         return function(num3){
//             console.log(num1+num2+num3);
//         }
//     }
// }

// const sum=(num1)=>(num2)=>(num3)=>console.log(num1+num2+num3)

// sum(5)(10)(15);

// Callback Hell -

// setTimeout(()=>{
//     console.log('1. work is done');
//     setTimeout(()=>{
//         console.log('2. work is done');
//         setTimeout(()=>{
//             console.log('3. work is done');
//             setTimeout(()=>{
//                 console.log('4. work is done');
//                 setTimeout(()=>{
//                     console.log('5. work is done');
//                     setTimeout(() => {
//                         console.log('6. work is done');
//                     },1000);
//                 },1000);
//             },1000);
//         },1000);
//     },1000);
// },1000);

// AJAX call using XMLHttprequest (in html page)                     // doubt

// JSON (JavaScript Object Notation)
// JSON.stringify() turns a JavaScript object into JSON text and stores that JSON text in a string.
// JSON.parse() turns a string of JSON text into a JavaScript object.
//json() method (is it return promise?)                             //dobut

// let obj={
//     key1:"Girraj",
//     key2:true,
//     key3:33
// };
// let obj_as_string=JSON.stringify(obj);
// console.log(obj_as_string);
// console.log(typeof(obj_as_string));

// let jsontext_as_obj=JSON.parse(obj_as_string);
// console.log(jsontext_as_obj);
// console.log(typeof(jsontext_as_obj));

// let json_text={                                                    // doubt
//     'key1':'girraj',
//     'key2':33
// }

// Promises & Fetch API method -

// we use promises to stay safe form callback hell.
// 3 conditions of promises - success or fail or pending
// promises will become more easy and understandable with async await method.
// in 90% cases, we use promises not create but we can also create promises in advanced JS
// promises uses .then ?

// fetch(https://restcountries.com/v2/name/united) returns a promise with 2/3 conditions -
// fulfilled- everything ok, no error
// reject - internet error, server error etc.
// ongoing/pending - this state will become fulfilled or reject state after taking its time

// Async Await & Error handling

// async await also returns promises but the way is different for handling promises.
// async method provides us error handling by default inside its method body.
// try{}catch(error){}
// Error handling can be done with try and catch blocks etc.


// Spread operator => when you are going to expand array or object literal.

// Rest operator/parameter => in function definition, to get all the parameter or may be rest of the parameters when function called with many arguments.

// both of them used with 3 dots(...)




// projects... (14/15)
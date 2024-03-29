let score = "33" ;

console.log(typeof score);   //or can also write as method
console.log(typeof (score));

//to convert it  string to number 
let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber)

//NaN => not a number
//some numbers cant be converted so console it and investigate
//if null is given then it prints 0 o/p

//"33"  => 33 o/p
//"33abc" => NaN
//true => 1 , false=>0

let IsLoggedIn = 0

let booleanIsLoggedIn = Boolean(IsLoggedIn);
console.log(booleanIsLoggedIn);  
 //converts it into true/false 1=>true 0=> false 
 // " " => false   "string"=>true

 let someNumber = 44
 stringNumber = String(someNumber)
 console.log(typeof stringNumber)


 //******************************OPERATIONS******************* */

 let value = 3
 let negValue = -value
//  console.log(negValue);

let str1 = "vani"
let str2 = "k.n"

let str3= str1 + str2;
console.log("here string",str3)

let string1 = "happy";
let string2 = " new "
let string3 = " year"

console.log(string1 + ""+string2 +""+ string3);

//  prefix and postfix
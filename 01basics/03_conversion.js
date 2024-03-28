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
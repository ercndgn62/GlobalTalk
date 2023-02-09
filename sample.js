var numberNine = 9
var stringNine = "9"

console.log(numberNine + numberNine)
console.log(stringNine + stringNine)

var greeting = "Hello";
var myName = "Nick";

console.log(greeting + myName)


var codeWord1 = "are";
var codeWord2 = "tubas";
var codeWord3 = "unsafe";
var codeWord4 = "?!";
console.log(codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1])

var stringYazi = "MERHABA CANIM NASILSIN"
console.log(stringYazi[0] + stringYazi.slice(1).toLowerCase())



var sillyString = "hELlo THERE, hOW ARE yOu doINg?";
 var lowerString = sillyString.toLowerCase();
var firstCharacter = lowerString[0];
 var firstCharacterUpper = firstCharacter.toUpperCase();
 var restOfString = lowerString.slice(1);
console.log(firstCharacterUpper + restOfString) 


var height = 65;
var heightRestriction = 60;
console.log(height > heightRestriction)


var isWeekend = false;
var hadShower = true;
var hasApple = false;

var hasOrange = true;
var shouldGoToSchool = !isWeekend && hadShower && (hasApple || hasOrange);
console.log(shouldGoToSchool)


var mary = true
var deniz = true
var kavga = mary && deniz
console.log(kavga)

var sevgi = true
var saygi = true
var para = false
var huzur = sevgi && saygi || para
console.log(huzur)

var friends = [
  "umut", "ozcan", "ali", "emrah"
]

console.log(friends[2])

friends[2]= "ece"

console.log(friends[2])

console.log(friends.length)
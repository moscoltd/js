//const { equal, notDeepEqual, notEqual } = require("assert");

const { Console } = require("console");

/*java script study code examples on functions created by kelvin mtwiri
mobile: no 0759310774
email : kelvinmtwiri837@gmail.com
happy cooding !!!!!!
*/
function myFunction()
{
    var name ="kelvin";  
    return name
}
console.log(myFunction());

function myName(){ //reuasable functions
    console.log("my name is kelvin");
}
myName();

//functions with args
//passing values to functions with arguments
function myNum(a , b){
    console.log(a + b);
}
myNum(12,5);

/*global scope ie var difined outside function class
in this case myGlobal is global scope var
nopeGlobal is  also a glopal variable
when var is added to nopeGlopal it bcmz local scope variable
ie is can only be aceesed in fun1
*/
var myGlobal = 10;

function fun1(){
    nopeGlobal = 5; //put var keyword here to make it local scope var
}
function fun2(){
    var output = "";
    if(typeof myGlobal != undefined){
        output += "myglobalnumber: " + myGlobal;
    }
    if (typeof nopeGlobal != undefined){
        output += "nopeglobalnumber: " + nopeGlobal;
    }
    console.log(output);
}
fun1();
fun2();

//local scope var
function myLocalScope(){
    var myStr =  "this is a local scope variable";
    console.log(myStr);
}
myLocalScope();

/* when we use global and local variable with the saame name 
local variable takes presidence over global variable
 */
 var carType = "benz";
 function myCar(){
    var carType = "bugatti";
    return carType;
 }
 console.log(myCar())
 console.log(carType)

 //################################################
 // practice square and sqrt of anumber using glopal,local and from a retutrn
//sqr methhod 1
function sqr (numbari){
    num = numbari * numbari; // global sciope var
    return num;
}
console.log(sqr(5));

//sqr method 2
function sqr2 (numbari){
    return numbari *numbari;
}
console.log(sqr2(6));

// sqr method 3
function sqr3 (numbari){
    var num = numbari * numbari; //local scope variable
    return num;
}
console.log(sqr3(7))

//sqrt method 4
function sqr4(no){
    var numb;
    numb = no * no;
    console.log(numb);
}
sqr4(10);

//sqrt method 1
function sqrt (numbari){
    var num = Math.sqrt(numbari);
    console.log("the squareroot of"+" "+numbari+" "+"is"+" "+num);
}
sqrt(9)

//method 2
function sqrt2 (numbari){
    return Math.sqrt(numbari);
    
}
console.log(sqrt2(9))

//############################################################################

//undefined value  returned from a function
 var sum = 5;
 function add3(){
    sum +=3;
    //return sum
 }
 console.log(add3())

 // aaignment with a return value
var changed =7; // initial value
function changeArg(num){ 
    //return statement to assign changeArg
    return (num +5) /3; 
}
changed = changeArg(10) // changed value
console.log(changed)

///////////////////////////////////////////////
// stand in line item are executed in queue
function nextInLine(arr, item){
    arr.push(item);
    return (item)
    //return arr.shift()
}
var testArr = [1,2,3,4,5];
console.log("before:"+ JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("after:"+ JSON.stringify(testArr));

var test2 = [1,2,3,4,5,6,7,8];
console.log("before:"+ JSON.stringify(test2));
console.log(nextInLine(test2, 9));
console.log("after:"+ JSON.stringify(test2));

/*
boolean true or false
conditional logic with if statements
Equality operator
*/

function evenNum (num){
    if (num %2 == 0){
        return true;
    }
    else{
        return false;
    }

}
console.log(evenNum(10));

//++++++++++++++++++++++++++++++++++++++++
//equality ==
function testEqual (value,value2){
    if (value  == value2){
        return "equal"
    }
    return "notEqual"
}
console.log(testEqual(10,"10")) //converts the string b ino a number

//strict equality we use  triple ===
function isEqual (a,b){
    if (a===b){
        return "equal";
    }
    return "not equal";
}
console.log(isEqual(10,"10"))//not equal bcz a is number and b is a string

/* other operators
not equal (!=)
strictly inequality (!==)
grater than >
less than <
grater than or equal to >=
less than or equal to <=
*/
function graterThan(y){
    if (y> 100){
        return "above 100"
    }
    if (y> 10){
        return "above 10 but below 100"
    }
    return "10 or under"
}
console.log(graterThan(12))

//logical AND operator &&
function testLogicalAnd(age){
    if (age >= 16 && age <=24){
        return "you can proceed to login page"
    }
    return "sory this content is only available for users between 16 and 24. "
}
console.log(testLogicalAnd(24))

//logical OR operator ||
function testLogicalOr (age){
    if (age <16 || age >24 ){
        return "your content is comming soon";
    }
    return "you can proceed";
}
console.log(testLogicalOr(25))

//else statements
function ifElse(num){
    if (num < 10){
        return "too smal , minimum amount is 10";
    }
    else{
        return "you can proceed to pay";
    }
}
console.log(ifElse(90))

// if else statements for multible conditions
function elseIf(num){
    if (num < 10){
        return "too small ,try with atleast 10$"
    }
    else if (num > 100) {
        return "you have reached minimum amount"
    }
    else{
        return "sucess ... pliiz wait the main activity is loading"
    }
}console.log(elseIf(101))

//chaining if else statements;
function chainIfElse(num){
    if (num <5){
        return "tiny";
    }
    else if (num < 10){
        return "small";
    }
    else if (num < 15){
        return "medium";
    }
    else if (num < 20){
        return "large";
    }
    else {
        return "huge";
    }
    
}
console.log(chainIfElse(20))

// golf game score code
var names = ["Hole-in-one!","Eagle","Birdie","par","Bogey","Double Bogey","Go Home"]

function golfSco (par, strokes){
    if (strokes == 1){
        return names[0]
    }
    else  if (strokes <= par -2){
        return names[1]
    }
    else if (strokes == par -1){
        return names[2]
    }
    else if (strokes == par){
        return names[3]
    }
    else if (strokes == par +1){
        return names [4]
    }
    else if (strokes == par +2){
        return names [5]
    }
    else if (strokes >= par +3){
        return names [6]
    }
}
console.log(golfSco(5,4));
//**********************************************/
// switch statements
function caseSwitch (val){
    var answer = "";
    switch (val) {
        case 1:
            answer= "alpha"
            break;
        case 2:
            answer= "beta"
            break;
        case 3:
            answer= "gamma"
            break;
        case 4:
            answer= "delta"
            break;
        default:
            answer="i dont know that sir"
            break;
    }
    return answer;
}
console.log (caseSwitch("a"))

//more example
function alphabetsSwitch (val){
    var answer = ""
    switch (val) {
        case "a":
            answer = "apple"
            break;
        case "b":
            answer = "bird"
            break;
        case "c":
            answer = "cat"
            break;
        case "d":
            answer = "dog"
            break;
        default:
            answer = "not in my dictionarry"
            break;
    }
    return answer;
}
console.log(alphabetsSwitch(3))

//exaple 3
function chainAvrg (val){
    answer = "";
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "high";
            break;
        
        default:
            answer = "others";
            break;
    }
    return answer;
}
console.log(chainAvrg(4))

/*replacing if else chains with switch*/
function chainToSwitch (val){
    var answer = "";
    switch (val){
        case "bob":
            answer = "marley";
            break;
        case 42:
            answer = "the answer";
            break;
        case 1:
            answer = "there is no #1";
            break;
        case 99:
            answer = "missed me by this much!";
            break
        case "7":
            answer = "ate nine";
            break
        default:
            answer = "wajakoya";
            break;

    }
    return answer ;
}
console.log(chainToSwitch(7))

//shortcut  of returning boolean values
function islessThan (a,b){
    return a<b;
}
console.log(islessThan(10,13))

/*objects
they are similar to ararys but insted of using indexes to acess
data we use properties
*/
var myDog ={
    "name" : "Bosco",
    "colour":"brown",
    "breed":"chiwawa",
    "height":"10 cm",
    "legs" : 4,
    "relatives":["simba","chui"]
};
//acessing  object with dot notation
var dogName = myDog.name;
console.log(dogName)
//acessing  object with bracket notation
var dogColour =myDog["colour"];
console.log(dogColour);
//acessing object properties with variables
var dogBreed = "breed";
var myDogBreed =myDog[dogBreed];
console.log(myDogBreed)
//updating object properties with dot notation
myDog.height = "30 cm";
console.log(myDog.height)
//adding new properties with dot notation and []notation
myDog.weight = "27 kg";
myDog["bark"] = "hoof !!!"
console.log(myDog.weight)
console.log(myDog.bark)
// delete keyword
delete myDog.legs;
console.log(myDog.legs)
//testing object for properties with hasOwnproperty method
function checkMyDog(checkProp){
    if (myDog.hasOwnProperty(checkProp)){
        return myDog[checkProp];
    }else {
        return "not found";
    }
}
console.log(checkMyDog("name"))

//manipulating complex objects
//myCats[{[]},{[]}]
var myCats =[
    {
        "jina":"jenny",
        "umri": 2,
        "mwonekano":"mweusi",
        "marafiki":[
            "pussi",
            "john",
            "marry"
        ],
        "mizani": "kilo 3"
    },
    {
        "jina":"pussi",
        "umri": 1,
        "mwonekano":"mweupe",
        "marafiki":[
            "jenny",
            "john",
            "marry"
        ],
        "mizani": "kilo 2"
    }
];
//acessing nested arrays
var paka1 = myCats[0].jina
var paka2 = myCats[1].jina
console.log(paka1)
console.log(paka2)
var pakaGang1 = myCats[0].marafiki[2];
console.log(pakaGang1);

//record collection

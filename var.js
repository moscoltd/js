/*decleraring and assigning a varible
we use = to assign a variable
*/
var a = 2;
var b = 3;
var c = 4;
var A;
var rem;

A=a + 8; 
console.log(A);

rem = c % b; // reminder operatoin %
console.log(rem) ;

// decleraring string variables "" or ''
var myFirstName = "kelvin\n";
var myLastName = "mtwiri\t";
var myName;

myLastName += "the engineer";
myName= myFirstName + myLastName; //concatenating  variables
console.log("hello\t"+myName);//concanetting strng with variable
console.log(myName.length);

//word blanks
function wordBlanks(noun,adjective,verb,adverb)
{
    var madlipz ="the" +" "+ adjective +" "+ noun +" "+ "is" +" "+ verb +" "+ adverb;
    return madlipz;
}

console.log(wordBlanks("cat","huge","eating","slowly"));
console.log(wordBlanks("boy","short","runing","quickly"))

/* strore multible values with arrays
arrays allow tou to store multiple data in one place
they start and end with [] 
every element in array is separed by comma ,
*/
var array =["john",20];
var myArray = [["joan",18],["michael",15]];//nested array 
array.push(["joy",45]); //add elemts into an array
var remove;
remove = myArray.pop();//removes from myArray
console.log(array);
console.log(myArray);


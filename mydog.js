var myDog ={
    "name" : "Bosco",
    "colour":"brown",
    "breed":"chiwawa",
    "height":"10 cm",
    "legs" : 4,
    "relatives":["simba","chui"]
};
function checkMyDog(checkProp){
    if (myDog.hasOwnProperty(checkProp)){
        return myDog[checkProp];
    }else {
        return "not found";
    }
}
console.log(checkMyDog("name"))


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
var paka1 = myCats[0].jina
var paka2 = myCats[1].jina
console.log(paka1)
console.log(paka2)
var pakaGang1 = myCats[0].marafiki[2];
console.log(pakaGang1);



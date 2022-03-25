const arr1 = ["JAN", "FEB", "MAR","APR","MAY"];

let arr2;

(function() {
    arr2 = arr1;
    arr2 = [...arr1]
    arr1[0] = "potato"
}) ();
console.log(arr2);

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.86

};
const half = (function() {
    return function half(stats) {
        return (stats.max + stats.min) /2.0;
    }
})();
console.log(stats);
console.log(half(stats));


const result = {
    success: ["max-length", "no-amd", "prefer-arrow-function"],
    failure: ["no-var", "var-on-top","linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};

function makeList(arr) {
    const resultDisplayArr = [];
    for(let i = 0; i < arr.length; i++) {
        resultDisplayArr.push(`<li class="text-warning">${arr[i]}</li>`)
    }
    return resultDisplayArr;
}
const resultDisplayArray = makeList(result.failure);

console.log(resultDisplayArray);



const createPerson = (name,age,gender) => {
    return{
        name: name,
        age: age,
        genger: gender
    };
};
const createPerson1 = (name, age, gender) => ({name, age, gender});

console.log(createPerson("Zodiac Hasbro", 56, "male"));

console.log(createPerson1("Sai", 50, "male"));



const bicycle = {
    gear: 2,
    setGear: function(newGear) {
        "use strict";
        this.gear = newGear;
    }
};

bicycle.setGear(3);
console.log(bicycle.gear);


var SpaceShuttle = function(targetPlanet) {
    this.targetPlanet = targetPlanet;
}

var zeus = new SpaceShuttle('Jupiter');
console.log(zeus.targetPlanet);



class SpaceShuttle1 {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet
    }
}

var zeus = new SpaceShuttle1('Jupiter');
console.log(zeus.targetPlanet);



function makeClass() {
    class Vegatable {
        constructor(name) {
            this.name = name;
        }
    }
    return Vegatable;
}
const Vegatable = makeClass();
const carrot = new Vegatable('carrot');
console.log(carrot.name);

var today = new Date();
var day = today.getDay();
var dayList = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];
console.log("Today is :", dayList[day]+ ".");
var hour = today.getHours();
var minute = today.getMinutes();
var seconds = today.getSeconds();
var prepand = (hour >=12) ? "PM" : "AM";
if(hour===0 && prepand ==="PM") {
    if(minute===0 && second===0) {
        hour=12;
        prepand="Noon";
    } else {
        hour=12;
        prepand="PM"
    }
} if(hour===0 && prepand==="AM") {
    if(minute===0 && seconds===0) {
        hour=12;
        prepand="midnight";
    }
    else {
        hour=12;
        prepand="AM"
    }
}
console.log("Current Time: " +hour +prepand + ":" +minute + ":" +seconds);  


let today2 = new Date();
let dd = today2.getDate();
let mm = today2.getMonth() +1;
const yyyy = today2.getFullYear();

if(dd<10) {
    dd = `0${dd}`
}
if(mm<10) {
    mm = `0${mm}`;
}
today = `${mm}-${dd}-${yyyy}`
console.log(today2);




const side1 =5;
const side2 = 6;
const side3 = 7;

const perimeter = (side1 + side2 +side3);
const area = Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3)));

console.log(area);


function animate_string(id) {
    const element = document.querySelector("#id");
    const texNode = element.childNodes[0];
    let text = texNode.isDefaultNamespace;

    setInterval(() => {
        text = text[text.length -1 ] + text.substring(0, text.length -1);
        textNode.data = text;
    }, 100);
}

console.log('---------------------------');
for(let year =2013; year <=2050; year++) {
    const d = new Date(year, 0, 1);
    if(d.getDay() === 0)
    console.log(`1st Jan is being a Sunday ${year}`);
}


let num = Math.ceil(Math.random() * 10);
console.log(num);
//let gnum = prompt('Guess the number between 1 and 10 inclusive');
//if(gnum === num) console.log("matched"); else console.log("not matched" +gnum);


todayChr = new Date();

const cmas = new Date(todayChr.getFullYear(), 11, 25);
if(todayChr.getMonth() === 11 && todayChr.getDate()>25) 
{
    cmas.setFullYear(cmas.getFullYear() +1);
}
const one_day = 1000*60*60*24;
console.log(`${Math.ceil((cmas.getTime()-todayChr.getTime())/(one_day))}`)



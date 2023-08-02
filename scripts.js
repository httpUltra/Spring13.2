// SOME ODDNUMBER
function oddNums(arr) {
    return arr.some(function(num) {
        return num % 2 !== 0;
    });
}

// HAS A ZERO SOME
function aZero(arr) {
    return arr.some(value => String(value).includes('0'));
}

// ONLYODD EVERY
function onlyOdd(arr) {
    return arr.every(num => {return num % 2 !== 0});
}

// HAS NO DUPLICATES
function noDupes(arr) {
    return arr.every(value => {return arr.indexOf(value) === arr.lastIndexOf(value)});
}

// HAS CERTAIN KEY
let arrOne = [
    {title: "Instructor", first: 'Elie', last:"Schoppik", isCatOwner: false},
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
    {title: "Instructor", first: 'Matt', last:"Lane", isCatOwner: true},
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
];

function hasKey(arr, key){
    return arr.every(function(obj){
        return obj[key];
    });
}


// // SOME ODDNUMBER
// function oddNums(arr) {
//     return arr.some(function(num) {
//         return num % 2 !== 0;
//     });
// }

// // HAS A ZERO SOME
// function aZero(arr) {
//     return arr.some(value => String(value).includes('0'));
// }

// // ONLYODD EVERY
// function onlyOdd(arr) {
//     return arr.every(num => {return num % 2 !== 0});
// }

// // HAS NO DUPLICATES
// function noDupes(arr) {
//     return arr.every(value => {return arr.indexOf(value) === arr.lastIndexOf(value)});
// }

// // HAS CERTAIN KEY
// let arrOne = [
//     {title: "Instructor", first: 'Elie', last:"Schoppik"},
//     {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
//     {title: "Instructor", first: 'Matt', last:"Lane"},
//     {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
//   ]

// function hasKey(arr, key){
//     return arr.every(function(obj){
//         return obj[key];
//     });
// }

// // HAS CERTAIN VALUE
// function hasVal(arr, key, val){
//     return arr.every(function(obj){
//       return obj[key] === val;;
//     })
// }
// // FIND BY USERNAME
// const users = [
//     {username: 'mlewis'},
//     {username: 'akagen'},
//     {username: 'msmith'}
// ];


// function byUsername(arr, search){
//     return arr.find(function (obj){
//         return obj.username === search;
//     })
// }


// // REMOVE USER
// function removeUser(arr, search){
//     return arr.find(function(obj){
//         if(obj.username === search){
//             return arr.splice(obj.username, 1);
//         }
//     })
// }
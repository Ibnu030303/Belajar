// Global Scope

var a = 1;
let b = 2;
const c = 3;

// console.log('Global scope:', a, b, c);

// function local() {
//     // Local Scope
//     var a = 4;
//     let b = 5;
//     const c = 6;

//     console.log('Local scope: ', a, b, c);
// }
// local();

// if (true) {
//     // Block Scope
//     var a = 4;
//     let b = 5;
//     const c = 6;
// }
// console.log('Global Scope:', a, b, c); 
// // var a akan bertabrakan dengan var a di global scope dan yang b dan c nialainya akan tetap b2 dan c3

for (var a = 0; a < 10; a++) {
    console.log(`Loop: ${a}`);
}
console.log('Global Scope:', a, b, c);
// var a akan di ubah menjadi 10 


// function greet() {
//     console.log('Hello World')
// }
// greet();

// function greet(name, lastname) {
//     console.log(`Hello ${name} ${lastname}`)
// }
// greet('ibnu', 'Nurdiyansa');//berisikan nilai dari name dan lastname

// function greet(name, lastname) {
//     if (typeof name === 'undefined') {name = 'Ibnu'}
//     if (typeof lastname === 'undefined') {lastname = 'Nurdiyansa'}
//     return `Hello ${name} ${lastname}`;
// }
// console.log(greet());
// //contoh name and lastname undifend karna nilai dari name dan lastname tidak di deklarasikan 
// // maka di beri kondisi if atau jika nilai dari name dan lastname berisikan undifined atau tidak terdefinisi maka isi dengan name = ibnu dan juga lastname = nurdiyansa

//atau bisa juga dengan cara ini isi langsung seperti di bawah ini
// function greet(name = 'Ibnu', lastname = 'Nurdiyansa') {
//     return `Hello ${name} ${lastname}`;
// }
// console.log(greet()); 
// klo sudah seperti di atas maka di consloe log tidak usah di isi kembali dari nialai name dan lastname nya 
// jika di consloe log nya di isi nilai dari name dan lastname nya maka yang akan tampil yaitu yang ada di console lognya 

function greet (name = 'Ibnu', lastname = 'Nurdiyansa') {
    return `Hello ${name} ${lastname}`;
}
console.log(greet('Penul', 'Azstar'));


// Function expresion tidak bisa di console log sebelum functionnya berbeda dengan function yang di atas bisa di console log sebelum functionnya
// const square = function(x) {
//     return x*x;
// }
// console.log(square(3));

// atau bisa juga langsung kasih nialai x nya di function sehingga i console lognya tidak usah di beri naialai lagi
const square = function(x = 8) {
    return x*x;
}
console.log(square());

// IIFE mmediately Invoked Function Expressions (IIFE) merupakan akan di panggil ssekaligus functionnya di panggil atau kita baca
(function () {
    console.log('Hello')
}) ();

(function (name) {
    console.log(`Hello ${name}`)
}) ('Ibnu');//isi dari namenya 
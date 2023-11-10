// if (true) {
//     do something();
// } else {
//     do something();
// }

var id = 100;

// //Equel to
// if (id == 100) {
//     console.log('BENAR');
// } else {
//     console.log('SALAH');
// }

// // Not Equel to
// if (id != 100) {
//     console.log('BENAR');
// } else {
//     console.log('SALAH');
// }

// Equal  To value & type
// jika const id bernilai string maka di if statment harus bernilai stirng
// if (id === '100') {
//     console.log('BENAR');
// } else {
//     console.log('SALAH');
// } 

// Jika nilai const id tidak di definisikan atau tidak di beri nilai maka akan tampil id is undifined
// if (typeof id != 'undefined') {
//     console.log(`ID Value is: ${id}`); //jika mau menggunakan sting tempalte tanda ' harus menggunakan tanda petik backtik `
// } else {
//     console.log('ID Value is undefined');
// }

// if (id == 100) {
//     console.log('BENAR');
// }

// Greater or Less than
// if (id <= 100) {
//     console.log('BENAR')
// } else {
//     console.log('SALAH')
// }

const color = 'yellow';

// if (color == 'red') { 
//     console.log('color is red')
// } else if (color == 'blue') {
//     console.log('color is blue')
// } else {
//     console.log('color is not red and blue')
// }
// // Jika color = red maka tampilkan color is red dan juga jika color = blue maka tampilkan color is blue dan jika color = bukan dari blue and red maka tampilkan color is not red and blue


// Logical Operators
const name = 'ibnu';
const age = 20;

if (age > 0 && age < 12) {
    console.log(`${name} is a child`);
} else if (age >=12 && age <=19) {
    console.log(`${name} is a Remaja`);
} else {
    console.log(`${name} is a Dewasa`)
}
// jika umur ibnu lebih dari 0 dann kurang dari 12 maka ibnu tergolong child dan jika umur ibnu lebih dari sama dengan 12
// dan kurang dari sama dengan 19 maka ibnu tergolong sebagai remaja. dan jika tidak dari kedua itu atau (else) maka ibnu tergolong sebagai dewasa
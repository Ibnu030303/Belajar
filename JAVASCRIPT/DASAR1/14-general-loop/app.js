// FOR
// for (let i = 0; i < 10; i++) {
//     //jika i = 2 maka tampilkan number 2 my favorit
//     if (i === 2) {
//         console.log('Number 2 is my favorit number');
//         continue; //continue di guanakan untuk menskip ke nilai selanjutnyaa jika tidak menggunakan continue maka angka 2 akan tampil 2 kali
//     }

//     //jika kita mau pemberintian di suatu nilai
//     if (i === 5){
//         console.log('Stop looping');
//         break; //break di gunakan untuk memberihentikan porses looping
//     }

//     console.log('Number' + i);
// } 

// WHILE
// let i = 0;

// while(i < 10) {
//     console.log('Number' + i);
//     i++;//jika tidak menggunakan i++ maka akan melakukan perulangan terus menerus tanpa henti \sehingga kita menabahkan increment i++
// }

let i = 0;

do {
    console.log('Number' + i);
    i++;
} while(i < 10);
// Perbedanaanya adalah di dalam scoope do ini apapun nilai atau kondisi dari i maka dia akan melakukan terlebih dahulu walau kondisi tidak memenuhi
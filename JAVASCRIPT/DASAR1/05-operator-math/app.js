const num1 = 100;
const num2 = 50;
let val;

//simple math operator
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
val = Math.PI; // Mencari nilai pi
val = Math.E; // pembulatan jika nilai diseimal leih dari 5 maka akan ke atas jika di bawah 5 makan akan ke bawah
val = Math.round(1.3); //fungsi round pembulatan otomatis jika desimal lebih dari 5 maka akan membulatkan ke atas begitupun sebaliknya
val = Math.ceil(1.3); // fungsi ceil akan membulatkan nilaai desimal ke ATAS walaupun nialai deismial di bekaang koma kurang dari 5 atau lebih dari 5
val = Math.floor(4.6); //fungsi floor akan membulatkan nialai desimal ke BAWAH
val = Math.sqrt(64); // mencari akar kuadrat
val = Math.abs(-5); // mengubah menjadi positif
val = Math.pow(8, 2); //mencari nilai yang di pangkatkan
val = Math.min(2, 33, 5, 65, 100, 1, 90);
val = Math.max(2, 33, 5, 65, 100, 1, 90);
val = Math.random();

val = Math.floor(Math.random() * 50); //fungsi math floor untuk membulatkan nilai math random

console.log(val);


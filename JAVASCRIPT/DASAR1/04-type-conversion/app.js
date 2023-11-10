let val;

// Number to Stirng
val = String(123);
val = String(5+5);

// Boolean to string
val = String(true);

// Date to String
val = String(new Date());

// Array to String
val = String([1,2,3,4,5]);

// To String()
val = (5).toString();
val = (true).toString();


//String to Number
val = Number('5');
val = Number('51.30');

//Bool to Number 
val = Number(true);
val = Number(false);

val = Number('hello'); // tidak bisa terkonvert karna array
val = Number([1,2,3,4,5]); // tidak bisa terkonvert karna array

val = parseInt('100.31');
val = parseFloat('100.20');

// console.log(val);
// console.log(typeof val);
// console.log(val.length); // lenght hanya untuk membaca type data string
// console.log(val.toFixed(2)); // Untuk menampilkan desimall di belakang koma 

const val1 = 5; //val1 = '5'; (string)
const val2 = 6
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);

//jika val1 di ganti menjadi string ataupun sebaliknya maka sum akan menjadi gabungan (Concatenation) antara 5 dan 6 jadi yang akan di hasilkan menjadi 56
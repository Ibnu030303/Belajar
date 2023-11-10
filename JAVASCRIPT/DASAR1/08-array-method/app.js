// Create Array
const number = [54, 23, 60, 1, 22]; //cara array 1
const number2 = new Array(90, 21, 7, 43, 100); //cara array 2
const fruit = ['Apple', 'Banana', ' Chery', 'Ornagee', 'Pear']; //Array dengan tipe data string
const mix = [30, 'Hello', true, undefined, null, {a: 1, b: 2}, new Date()]; //Array dengan tipe data campuran

let val;

// Get length 
val = number.length; //Membaca panjang data dari const number

// Check is array
val = Array.isArray(number2); //check apakah const number 2 merupakan tipe data array atau bukan

// Get single value
val = fruit[4]; //memunculkan index ke 4 dari const fruit
val = fruit[0];

// Insert into array
fruit[2] = 'Grape' //mengganti index ke 2 dari const fruit yaitu chery menjadi grape

// Find index of value
val = mix.indexOf(true); //mencari index nilai truee dari const mix 

// Mutating 'mengubah atau menambahkan nilai dari suatu array'

// Add on to end
number.push(200); //menambahkan nilai 200 pada const number di urutan belakang

// Add on to front
number.unshift(7); //menabahla milai 7 pada const number di urutan depan

// Take off from end
number.pop(); // menghapus nilai dari const number di urutan belakang

// Take off from front
number.shift(); // menghapus nilai dari const number di urutan depan

// Splice value 'menghapus beberpaa nilai'
number.splice(1,1); //untuk menghapus dari const number dari index ke 1 sampe ke 1
number.splice(1,3); //untuk menghapus dari const number dari index ke 1 sampe ke 3

// Reverse
fruit.reverse(); //membalik data dari const fruit yang tadinya di belakang menjadi di depan 

console.log(number);

console.log(fruit);
console.log(val);
// For
const cars = ['Honda', 'Toyota', 'Daihatsu', 'Ford'];

// for(let i = 0; i < cars.length; i++){
//     console.log(cars[i]);//cars[i] untuk menganggil data data dari const cars. [i] untuk memanggil index key dari data cars karna meruapakan tipe data array klo tidak menggunakan [i] maka yang muncul hanya data array semua nya.
// }

// Foreach
// cars.forEach(function(car) {
//     console.log(car);
// });
// car merupakan variable singular

//jika kita ingin mencari nilai indexnya dari data cars 
// cars.forEach(function(car, index, array) {
//     console.log(`${index} : ${car}`);
//     console.log(array);//Jika kita ingin memunculkan semua datanya 
// });

// MAP
// const users = [
//     {id: 1, name: 'Alex'},
//     {id: 2, name: 'Ibnu'},
//     {id: 3, name: 'Bella'},
//     {id: 4, name: 'Carl'},
// ];

// // di dalam vriable constan kita tidak bisa mengupdate suatu nilai tetapi ketika kita akan coba meanbahkan dengan tipe data objek maka
// // kita akan mendapatkan mengubah nilai dari variable constan tersebut dengan menggunakan fungsi map
// const ids = users.map(function(user) {
//     return user.id
// }); // artinya kita akan melakukan perulangan atau maping dengan mencari data dari variable users dan kita mencari dari masing masing property atau object yang di miliki users ini dan kita akanmemanggil nialai dari id tersebut
// console.log(ids);

const user = {
    firstname: 'Ibnu',
    lastname: 'Nurdiyansa',
    age: 20
}

// x merupakan key dari masing masing property object user
for (let x in user) {
    console.log(`${x}`);
}

// ketika kita coba untuk menampilkan user berdasarkan key yang di hasilkan dari variable x 
// maka akan menampilkan vallue dari firstname, lastname, age di mana kita akan memanggil variable user dan kita memilih dari property dari variable x
for (let x in user) {
    console.log(`${x} : ${user[x]}`);
}
// untuk mencari suatu nilai berdasarkan property atau key yang di miliki suatu object
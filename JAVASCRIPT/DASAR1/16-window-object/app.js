// Window Object | Properties | Methods
// window.console.log(123);

// window.alert("Hello");

// Prompt
// const input = prompt();
// alert(input);

// Confirm
// confirm('Are you sure?');

// if (confirm('Are you sure?')) {
//     console.log('Yes');
// } else {
//     console.log('No')
// }
// //jika anda ingin melakukan confirm jika benar maka tampilkan yes dan jika tidak tampilkan no

let val;

val = window.outerHeight; //untuk mengetahui height atau tinggi dari browser yang kita buka
val = window.outerWidth; // Untuk mengetahui nilai width atau lebar dari browser yang kita buka

// Location Object di gunaakan untuk mendapatkan nilai dari pengunjung seperti ip, host name, dll
val = window.location;

// History Object
// val = window.history.go(-1); //go(-1) di gunakan untuk memebuka halaman sebelummnyaa yang telah kita buka 

console.log(val);
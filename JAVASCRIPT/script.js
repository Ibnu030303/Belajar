let namaMahasiswa = 'Ibnu Nurdiyansa'
console.log("Nama : " + namaMahasiswa)
namaMahasiswa = 'Fajar'
console.log("Nama : " +  namaMahasiswa)

// const namaMahasiswa1 = 'Ibnu Nurdiyansa'
// console.log("Nama : " + namaMahasiswa1)
// namaMahasiswa1 = 'Fajar'
// console.log("Nama : " +  namaMahasiswa1)

const namaPegawai = 'Arif'
let umur = 24
let tinggiBadan = 175.5
let sukaNgoding = true
let Mahasiswa = ["Ibnu", "Arif", "Fajar"]
let Pegawai = {
    Nama: namaMahasiswa,
    Umur: umur,
    SukaNgoding: sukaNgoding
}
// console.log(Pegawai)

function penjumlahan(a,b) {
    return a + b
}
console.log(penjumlahan(10, 20))
console.log(penjumlahan(5, 10))

function munculkanAlert() {
    alert("Hello" + namaMahasiswa)
    console.log(namaPegawai)
}

//episode 2

//PENGKONDISIAN
let umurUser = 17
let userSukaNgoding = false
// if (umurUser == 18 && userSukaNgoding == true) {
//     alert("Umur anda 18 dan suka ngoding")
// } else if (umurUser >= 19) {
//     alert("Umur mencukupi silahkan masuk")
// } else {
//     alert("Umur invalid")
// }
// //operator and kedua variable  harus bernilai benar jika salah satu variable bernilai salah maka akan salah

if (umurUser == 18 || userSukaNgoding == true) {
    alert("Umur atau 18 atau suka ngoding")
} else if (umurUser >= 19) {
    alert("Umur mencukupi silahkan masuk")
} else {
    // alert("Umur invalid")
}
// //operator or jika salah satu variable bernilai benar maka hasil = benar tapi jika
// kedua variable berinilai salah maka hasil = salah

// PERULANGAN
for (let i=0; i<10; i++) {
    console.log(i)
}

// ARRAY DAN OBJECT
let User = ["Ibnu", "Husnul", "Micola", "arif", "Fajar"]
console.log(User[1])

let userObject = {
    nama : "admin",
    password: "12345",
}
alert(userObject.nama)
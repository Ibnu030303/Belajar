let username  = document.getElementById("username")
let password = document.getElementById("password")

let database = [{username : "admin", password: "admin123"}, {username : "user1", password : "user123"}]

function submit() {
    for (let i=0; i < database.length; i++) {
        if (database[i].username == username.value && database[i].password == password.value) {
            window.location.href = "home.html"
            return
        }
    }
    alert("username atau password salah")
}

// const input = 'Hello World';
// const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
// let output = '';
// let index = 0;

// while (input !== output) {
//     if (input[index] === ' ') {
//         output += ' ';
//         index++
//         continue;
//     }
//     const randomAlphabet = alphabet[Math.floor(Math.random() * alphabet.length)]
//     if (input[index] === randomAlphabet ) {
//         output += randomAlphabet;
//         index++
//         console.log(output)
//     } else {
//         console.log(output + randomAlphabet)
//     }
//     for (let i = 0; i < 2000000; i++) {}
// }
const name1 = 'ibnu';
const name2 = 'nurdiyansa';
const age = 20;
const phar = 'Hello-my-name-is ' + name1 + ' -and-im- ' + age + ' -years-old-';
const tags = 'html, css, javasript, php';
let val;



val = name1 + name2;

// Concatenation (gabungan)
val = name1 + ' ' + name2; //fungsi ' ' untuk menabahkan space anatara nama1 dan nama 2
val = 'Hello my name is ' + name1 + ' and im ' + age + ' years old';

// Append
val = 'pernul ';
val += 'azstar'; //tanda + untuk menggabungkan dari val sebelumnnya 

// Escaping
val = 'That\'s awesome , I can\'t wait it'; // tanda \ untuk menambahkan singgle quote
val = "Tha's awesome, i can't wait it"; // atau menggunaka cara ke 2

// Length
val = name1.length; //untuk menjumlahkan ada berapa huruf dalam kata 

//concat
val = name1.concat(' ', name2); //mengabungkan antara name1 dan name2

//change case
val = name1.toUpperCase(); //mengubah menjadi huruf besar
val = name2.toLowerCase();  // mengubah menjadi huruf kecil

val = name1[3]; //mencari index ke3 dari const name1 yaitu u

// Indexof()
val = name1.indexOf('u'); //mencari nilai u dari const name1 ada di index ke berapa 

// CharAt
val = name1.charAt('2'); //mencari index ke2 dari const name1 yaitu n
val = name1.charAt(name1.length - 1); //length akan menampilkan jumlah dari name1 dan -1 untuk length index di mulai dari 1 sedangkan string di mualai dari 0 jadi length - 1 agar index length bisa di mualai dari index 0 

// Substring
val = name1.substring(0,3); // memotong sebuah nialai dari string name1 dari index 0 sampe index 3 yaitu mejadi ibn

// Slice
val = name1.slice(0,3); 
val = name1.slice(-3);  // Akan memunculkan 3 huruf trakhir dari belakang perbdaan slince dan substirng 

// Mengubah dari nilai string menjadi array dan juga pemisahnya 
// Split atau mesiahkan dari spasinya menjadi index array
val2 = phar.split(' ');
val = phar.split('-'); // mengubah splasi dari - 
val = tags.split(','); // Mengubah stirng menjadi array dengan pemisah koma

// replace() mengubah nilai string menggunakan method replace
val = phar.replace('Hello', 'Hi'); //mengubah string phar kata Hello menjadi Hi

// Melakukan pengkondisian dari string mencari sebuah nilai tertentu dari string phar menjadi boolean menggunakan method includes
// includes
val = phar.includes('Hello'); //apakah di dalam variable phar terdapat sebuah string "Hello" jika benar maka akan bernialai truee jika tidak ada bernilai false 

//method includes ini biasanya di gunakan untuk melakaukan validasi dari sebuah nialai atau data 

console.log(val2);
console.log(val);


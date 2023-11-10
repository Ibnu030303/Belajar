// const subtotal = [1500, 20000, 4000, 19000, 32000];

// const total = subtotal.reduce((curentTotal, singleSubtotal) => {
//     return curentTotal + singleSubtotal;
// });
// console.log(total);//yang tampil di sini adalah 76500

// // PENJELASAN
// Callback        curentTotal         singleSubtotal       Nilai balik 
// proses 1        1500                20000                21500
// proses 2        21500               4000                 25500
// proses 3        25500               19000                44500
// proses 4        44500               32000                76500


const examScore = [80, 85, 70, 90, 93, 77];

// // Mencari total dari const di atas menggunakan for
// let total = 0;

// // score dari exampScore 
// for(let score of examScore) {
//     total += score;// tambahkan nilai total degan nilai score yang kita dapatkan
// }
// console.log(total);

// contoh 2 menggunakan reduce
// const total = examScore.reduce((total, score) => {
//     return total + score;
// });
// console.log(total);

const animes = [
    {
        title:'One Piece',
        rating: 89,
        year: 1999,
    },
    {
        title: 'Bleach',
        rating: 82,
        year: 2004,
    },
    {
        title: 'Attack on Titan',
        rating: 92,
        year: 2013,
    },
    {
        title: 'Hunter x Hunter',
        rating: 90,
        year: 2011,
    }, 
    {
        title: 'Naruto',
        rating: 84,
        year: 2002,
    }
];

//untuk mencari nialai rating yang paling tinggi
const bestAnime = animes.reduce((bestAnime, curAnime) => {
    console.log(bestAnime, curAnime);// prosesnyaa

    // jika nilai dari rating curanime itu lebih besar dari bestanime
    if(curAnime.rating > bestAnime.rating) {
        return curAnime;
    }
    return bestAnime
});
console.log(bestAnime);
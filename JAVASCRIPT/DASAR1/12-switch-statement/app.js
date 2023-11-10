const color = 'yellow';

switch (color) {
    case 'red':
        console.log('color is red')
        break;
    case 'blue':
        console.log('color is blue')
        break;
    default:
        console.log('color is not red or blue');
        break;
}
// jika const color bernialai blue maka case blue akan berjalan dan jika const color bernilai red maka case red akan berjalan dan jika const color buka bernilai dari keduanya maka akan menampilkan color is not red or yellow

let day;

switch (new Date().getDay()) {
    case 0:
        day = 'sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
         day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
        break; 
}
console.log(day);
// Jika sekarang ada adalah hari jumat karna memakai object getDay dari method new Date maka case 5 akan berjalan. knp tidak memakai default akhir karna ini case day bernilai pasti
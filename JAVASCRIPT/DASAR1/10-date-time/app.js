let val;

const today = new Date('2-1-1990');
let birthday = new Date('9-10-1994 23:30:25' );
birthday = new Date ('Augustus 16 1994');
birthday = new Date('8/16/1994');

val = today.toString();

val = today.getFullYear();
val = today.getMonth();
val = today.getDate();
val = today.getHours();

console.log(val);
console.log(typeof val);

console.log(birthday);
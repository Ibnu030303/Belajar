const person = {
    name: 'ibnu',
    lastname: 'nurdiyansa',
    age: 20,
    email: 'ibnu@job.com',
    hobi: ['music', 'sports'],
    address: {
        city: 'tangerang',
        zipcode: '1122'
    },
    getbirthyear: function() {
        return 2022 - this.age;
    }

}

let val;

val = person;
val1 = person.name;
val2 = person['name'];
val3 = person.age;
val4 = person.hobi[1];
val5 = person.address.zipcode;
val6 = person.address['city'];
val7 = person.getbirthyear();



console.log(val);
console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);
console.log(val5);
console.log(val6);
console.log(val7);
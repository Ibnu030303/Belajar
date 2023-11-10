const name = 'Hakim';
const age = 21;
const job = 'Web Developer';
const city = 'tangerang';

let html;

// Without tempalte string (es5)
html = '<ul>' +
            '<li>name: ' + name + '</li>' +
            '<li>Age: ' + age + '</li>' +
            '<li>Job: ' + job + '</li>' +
            '<li>City: ' + city + '</li>' +
        '</ul>';


function hello() {
    return 'Hello'
}

// Without template strings (es6)
html = `
         <ul>
            <li>name: ${name} </li>
            <li>Age: ${age} </li>
            <li>Job: ${job} </li>
            <li>City: ${city} </li>
            <li>${5+2}</li>
            <li>${hello()}</li>
            <li>${age > 20 ? 'Over 20' : 'Under 20'}</li> 
        </ul>
`; //ini backtik buakn single quote ``
// penjelasan pengkodisian <li> age = jika age atau umur lebih dari 20 jika benar makan akan tampilkan over 20, jika kurang maka akan tampil under 20
document.body.innerHTML = html;
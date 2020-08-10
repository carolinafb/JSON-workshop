// Section 6: CRUD

const users = require('../data/userArray.json');

console.log('Users:');
console.table(users);

const handle = 'sanchez_ata';

/* TODO:
    [ ] Read Ata from `users` list and save on `result` variable
*/
const result = users.find((user) => user.handle === handle);
//find() te devuelve el primero. Con filter() te devuelve un arreglo con todas las ocurrencias.

console.log('Read:');
console.log(`Name:  ${result.name}`);
console.log(`Country: ${result.country}`);

//otra manera

let result = {};
for (const user of users) {
    if (user.handle === handle) {
        result = user;
        break;
    }
}

const len = users.length; //para que no lo calcule la longitud del vector en cada iteracion del for
for (let index = 0; i < len; i++) {
    const user = users[i]; //la diferencia con el for of
    if (user.handle === handle) {
        result = user;
        break;
    }
}

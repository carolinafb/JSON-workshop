// Section 6: CRUD

const users = require('../data/userObject.json'); //lo carga como objeto literal
const saveFile = require('../api/saveFile');
console.log('Users:');
console.table(users);

const description = {
    name: 'Caro Bustos',
    country: 'AR',
};
const handle = 'carobsts';

/* TODO:
    [ ] Add Caro to `users` list using `description` object
    [ ] Update information on `userObject.json` file
*/
//1°
users[handle] = description;

console.log('Create:');
console.table(users);

//2°
saveFile.toJSON(users, 'userObject');

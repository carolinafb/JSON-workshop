// Section 6: CRUD

/* TODO:
    [ ] Import `userArray.json`
    [ ] Import `saveFile` API
    [ ] Add property `level` to whole users
    [ ] Update information on `userArray.json` file
*/
const users = require('../data/userArray.json');
const saveFile = require('../api/saveFile');
console.log('Antes:*************************************************************************');
console.log('Users:');
console.table(users);

for (const [index, value] of users.entries()) {
    //el entrie devuelve 2 valores indice,valor (en este caso indice y objeto)
    value.level = 'Pro';
    users[index] = value;
}
console.log('Despues:*************************************************************************');

console.log('Users:');
console.table(users);

saveFile.toJSON(users, 'userArray');

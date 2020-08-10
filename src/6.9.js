// Section 6: CRUD

const users = require('../data/userArray.json');
const saveFile = require('../api/saveFile');

console.log('Users:');
console.table(users);

const handle = 'bochap_';

/* TODO:
    [ ] Delete Bocha from `users` list
    [ ] Update information on `userArray.json` file
*/
const index = users.findIndex((user) => user.handle === handle);
//console.log('indice:' + index);
if (index > -1) {
    users.splice(index, 1);
}

console.log('Delete:');
console.table(users);
saveFile.toJSON(users, 'userArray');

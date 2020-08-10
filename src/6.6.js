// Section 6: CRUD

const users = require('../data/userArray.json');
const saveFile = require('../api/saveFile');

console.log('Users:');
console.table(users);

const description = {
    handle: 'carobsts',
    name: 'Caro Bustos',
    country: 'AR',
};

/* TODO:
    [ ] Add Caro to `users` list using `description` object
    [ ] Update information on `userObject.json` file
*/
users.push(description);
saveFile.toJSON(users, 'userArray');

console.log('Create:');
console.table(users);

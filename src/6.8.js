// Section 6: CRUD

const users = require('../data/userArray.json');
const saveFile = require('../api/saveFile');

console.log('Personajes:');
console.table(users);

const handle = 'selene_nr';
const result = users.map((user) => {
    if (user.handle === handle) {
        user.country = 'DE';
    }
    return user;
});

//otra manera

//const index = users.findIndex()

/* TODO:
    [ ] Update Lara `country` to `DE` on `users` list
    [ ] Update information on `userArray.json` file
*/
saveFile.toJSON(users, 'userArray');
console.log('Update:');
console.table(result);

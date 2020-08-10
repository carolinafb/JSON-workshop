// Section 6: CRUD

const users = require('../data/userObject.json');
const saveFile = require('../api/saveFile');

console.log('Users:');
console.table(users);

const handle = 'bochap_';

/* TODO:
    [ ] Delete Bocha from `users` list
    [ ] Update information on `userObject.json` file
*/
delete users[handle];
console.log('Delete:');
console.table(users);

//2°
saveFile.toJSON(users, 'userObject');

// un borrado logico

const handle = 'carobsts';
users[handle] = undefined; // como lo defino como undefine, al convertise en objeto literal, no lo agrega y asi no lo eliminamos del archivo

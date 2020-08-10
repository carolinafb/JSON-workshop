// Section 6: CRUD

/* TODO:
    [ ] Import `userObject.json`
    [ ] Import `saveFile` API
    [ ] Add property `level` to whole users
    [ ] Update information on `userObject.json` file
*/

const saveFile = require('../api/saveFile');
const users = require('../data/userObject.json');

for (const key in users) {
    users[key].level = 'pro';
}

console.table(users);

saveFile.toJSON(users, 'userObject');

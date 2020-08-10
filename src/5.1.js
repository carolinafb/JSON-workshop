// Section 5: Properties

const character = {
    name: 'Homer J Simpson',
    age: 39,
    home: {
        address: 'Avenida Siempreviva 742',
        city: 'Springfield',
    },
    isEmployed: true,
    sons: ['Bart', 'Lisa', 'Maggie'],
};

/* TODO:
    [ ] Show each property on console
    [ ] Add labels to each property on console
*/

console.log(
    'name: ' + character.name,
    'age: ' + character.age,
    'home: ' + character.home.address,
    character.home.city,
    'employ: ' + character.isEmployed,
    'sons:' + character.sons[0],
    character.sons[1],
    character.sons[2]
);

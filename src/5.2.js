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
    [ ] Show each son in a different line
*/
console.log('sons:');
console.log(`Hijo 1: ${character.sons[0]}`);
console.log('Hijo 2: ' + character.sons[1]);
console.log('Hijo 3: ' + character.sons[2]);

//o tambien asi:
console.log('**************************************************************************************');
character.sons.forEach((son, index) => {
    console.log(`hijo ${index + 1}: ${son}`);
});

//o tambien:
console.log('**************************************************************************************');
const [son1, son2, son3] = character.sons;
console.log('sons 1:' + son1);
console.log('sons 2:' + son2);
console.log('sons 3:' + son3);

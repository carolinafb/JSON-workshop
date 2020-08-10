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
    [ ] Create variables for `age`, `city` and `sons` values with properties notation
    [ ] Create same variables from `character` object` using destructuring
*/

//1°
//const age = character['age'];
//const city = character['home']['city'];
//const sons = character['sons'];

//2° con desestruturacion
const {
    age,
    home: { city },
    sons,
} = character;

console.log(age);
console.log(city);
console.log(sons);

// Section 4: Conversions

/* TODO:
    [ ] Convert `badBoy` object to string and save on `result` variable
    [ ] Remove `toJson()` from `Date()` and return `undefined` on `getAge()`
    [ ] Filter by `current` properties, and format text with 2 spaces
*/

//JSON.stringify(objeto,filtro,formateo);

/* 1°:

const getAge = () => 18;

const badBoy = {
    isValid: false,
    age: getAge(),
    current: new Date().toJSON(),
};

const result = JSON.stringify(badBoy); 

console.log(result);

DEVUELVE LA CONSOLA:
{"isValid":false,"age":18,"current":"2020-08-09T02:35:39.949Z"}*/

/*2°:

const getAge = () => undefined;

const badBoy = {
    isValid: false,
    age: getAge(),
    current: new Date(),
};
const result = JSON.stringify(badBoy);

console.log(result);
 DEVUELVE LA CONSOLA:
{"isValid":false,"current":"2020-08-09T02:44:42.736Z"}
*/

/*3°: */
const getAge = () => undefined;

const badBoy = {
    isValid: false,
    age: getAge(),
    current: new Date(),
};
//const result = JSON.stringify(badBoy, ['current'], 2);
//console.log(result);

/*DEVUELVE LA CONSOLA:
{
    "current": "2020-08-09T02:50:17.901Z"
  }*/

const result = JSON.stringify(badBoy, ['current'], '*-*-*-->');
console.log(result);

/*DEVUELVE LA CONSOLA:
{
*-*-*-->"current": "2020-08-09T02:53:03.365Z"
}*/

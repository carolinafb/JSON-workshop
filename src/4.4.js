// Section 4: Conversions

/* TODO:
    [ ] Convert string `json` to `badBoy` object ¿it's posible?
    const json = '{"isValid": false, "age": getAge(), "current": (new Date()).toJSON()}';
    const badBoy = JSON.parse(json);
    DEVUELVE CONSOLA:
    undefined:1
{"isValid": false, "age": getAge(), "current": (new Date()).toJSON()}
                          ^

SyntaxError: Unexpected token g in JSON at position 26
    at JSON.parse (<anonymous>)
    at Object.<anonymous> (C:\Users\Carolina\Documents\Extras\JSON practica\json-workshop-reactcba-master\src\4.4.js:10:21)
    at Module._compile (internal/modules/cjs/loader.js:1138:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1158:10)
    at Module.load (internal/modules/cjs/loader.js:986:32)
    at Function.Module._load (internal/modules/cjs/loader.js:879:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:71:12)
    at internal/main/run_main_module.js:17:47

    PORQUE NO PUEDO PASO DE FUNCION A OBJETO LITERAL VALIDO

    [ ] Change `age` value with 18 number and `current` with "2020-04-01T03:15:32.130Z"
    const json = '{"isValid": false, "age": 18, "current":"2020-04-01T03:15:32.130Z"}';

    [ ] Try convert using the reviver option, ensuring `current` was parsed to ISO-8601 date format
*/
const json = '{"isValid": false, "age": 18, "current":"2020-04-01T03:15:32.130Z"}';

const reviever = (key, value) => {
    if (typeof value !== 'string') {
        return value;
    }
    const isoDate = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
    return isoDate.test(value) ? new Date(value) : value;
};

const badBoy = JSON.parse(json, reviever);
console.log(badBoy);

//SALIDA EN CONSOLA: { isValid: false, age: 18, current: 2020-04-01T03:15:32.130Z } notar que ya la fecha no es string sino de tipo date

/*EJEMPLO DE REVIEVER SIN EL REJECT
const reviever = (key, value) => {
    if (typeof value !== 'string') {
        return value;
    }
};

const badBoy = JSON.parse(json, reviever);
console.log(badBoy);
//SALIDA EN CONSOLA: { isValid: false, age: 18 } no me pone en el objeto lo que son string*/

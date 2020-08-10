// Section 4: Conversions

const json = '{"breed":"Tuxedo","name":"Felix"}';

/* TODO:
    [ ] Convert `json` string to object
    [ ] Save on `cat` variable
*/

const cat = JSON.parse(json);

console.log('String:');
console.log(json);

console.log('Object:');
console.log(cat);

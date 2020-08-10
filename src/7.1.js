// Section 7: Challenge

const pokemonApi = require('../api/pokemon.js');

const show = (result) => {
    //console.log(result);

    /* TODO:
        [ ] What is his name?
        [ ] What are his abilities?
        [ ] What are his types?
        [ ] What is his weight?
    */

    console.log('Nombre: ' + result.name);
    console.log('Habilidades:');

    const ability = result.abilities.map(({ ability }) => ability.name);
    console.log(ability);

    console.log('Types:');
    const type = result.types.map(({ type }) => type.name);
    console.log(type);

    console.log('Peso: ' + result.weight);
};

(async () => {
    const id = await pokemonApi.getRandomId();
    const result = await pokemonApi.getInfo(id);
    show(result);
})().catch((error) => console.log(`Error: ${error}`));

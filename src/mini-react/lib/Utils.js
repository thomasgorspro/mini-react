function type_check_v1(input, type) {
    if (input === null && type === "null" || typeof input === undefined && type === "undefined") {
        return true
    }
    if (typeof input === type) {
        return !(input === null && type === "object");

    }
    return type === "array" && Array.isArray(input);
}

function type_check_v2(arg1, arg2) {

    if (arg2["enum"]) {
        for (i in arg2["enum"]) {
            if (arg2["enum"][i] === arg1) {
                return type_check_v1(arg1, arg2["enum"][i])
            }
        }
    }
    
    if (arg2["type"] && type_check_v1(arg1, arg2["type"]) && !arg2["enum"]) {
        if (arg2["value"]) {
            return JSON.stringify(arg1) === JSON.stringify(arg2["value"])
        }
        return true
    }
    
    return false
}

console.log('type_check :\t'+type_check_v2('foo', {type: 'string', value: 'foo'}));
console.log('type_check :\t'+type_check_v2(['value1', 'value2'], {type: 'array'}));
console.log('type_check :\t'+type_check_v2(1, {type: 'array'}));

Object.prototype.interpolate = function (template) {  
  return template.replace(/\{\{\s?([\w.]+)\s?\}\}/g, (match, variable) => {
    return variable.split('.').reduce((previous, current) => {
      return previous[current]
    }, this) || ''
  })
}

const unitTest = () => {
    const trainer = {
        name: 'Tom',
        weight: 60,
        favoritePokemon: {
            size: 170,
            name: 'Pikachu',
            type: 'électrique',
            evolution: {first: 'Raichu'}
        }
    };

    const template = `
        <li>
          <p>
            <strong>Je m'appelle {{ name }}</strong>
            <small>Mon Pokémon favori est {{ favoritePokemon.name }}, il est de type {{ favoritePokemon.type }}</small>
            <small>Son évolution s'appelle {{ favoritePokemon.evolution.first }}</small>
          </p>
        </li>
    `;

    const interpolatedTemplate = trainer.interpolate(template)
    console.log(interpolatedTemplate);
};

unitTest();


Object.prototype.propAccess = (template, options) => {
    return template.replace(/\{\{\s?([\w.]+)\s?\}\}/g, (match, variable) => {
      return variable.split('.').reduce((previous, current) => {
        return previous[current]
      }, options) || ''
    })
}

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

const unitTest = () => {
    const trainer = {
        name: 'Tom',
        weight: 60,
        favoritePokemon: {
            size: 170,
            name: 'Pikachu',
            type: 'Electric',
            evolution: {first: 'Raichu', second: 'Raichu++'}
        }
    };

    const template = `
        <li>
          <p>
            <strong>{{ favoritePokemon.name }}</strong>
            <small>{{ favoritePokemon.type }}</small>
            <small>{{ favoritePokemon.evolution.first }} {{ favoritePokemon.evolution.second }}</small>
          </p>
        </li>
    `

    console.log('propAccess :\t'+propAccess(template, trainer));
};

unitTest();


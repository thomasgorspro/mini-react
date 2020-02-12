Object.prototype.propAccess = function (prop) {
    if (typeof prop !== 'string') {
        return `Property ${prop} is not a string`;
    }
    const properties = prop.split('.');

    if (this.hasOwnProperty(properties[0]) && (this[properties[0]] instanceof Object) && properties.length > 1) {
        const property = this[properties[0]];
        properties.splice(0,1);
        return property.propAccess(properties.join('.'));
    } else {
        return this[properties[0]];
    }
}

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

    console.log(trainer.propAccess(["ok", "ok"]));
};

unitTest();
'use strict'

class Component {
    constructor(properties, child = {}) {
        this.properties = properties;
        this.previousState;
        this.state = {}
    }
}
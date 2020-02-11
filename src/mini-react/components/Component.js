'use strict'

export default class Component {
    constructor(state = {}) {
        this.previousState = null;
        this.state = state; 
    }

    shouldUpdate = () => ( this.previousState !== this.state );

    setState = state => {
        this.previousState = this.state;
        this.state = state;
    }

    
}
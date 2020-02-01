'use strict'

export class Route {
    constructor(name, path) {
        this.name = name;
        this.path = path;
    }
    getName = () => (this.name);
    getPath = () => (this.path);
};

export class Router {
    constructor(routes) {
        this.routes = routes.routes; //[Route]
        this.notFound = this.notFound;
    }
    currentRoute = () => {
        const route = this.routes.filter( route => ( route.getPath() === window.location.pathname ))[0];
        return !route ? this.notFound : route
    
    }
};


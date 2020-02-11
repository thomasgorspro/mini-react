export class Route {
    constructor(name, path, component) {
        this.name = name;
        this.path = path;
        this.component = component;
    };

    getName = () => (this.name);
    getPath = () => (this.path);
    getComponent = () => (this.component);
};

export class Router {
    constructor(routes) {
        this.routes = routes.routes; //[Route]
        this.notFound = routes.notFound;
    }

    getRoute = route => {
        const matchingRoute = this.routes.filter( registeredRoute => ( registeredRoute.getPath() === route ))[0];
        return !matchingRoute ? this.notFound : matchingRoute;
    };
};


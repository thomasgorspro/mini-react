'use strict';

export class Router {
    method() {
        window.addEventListener('popstate', this.callback);
    }

    catchEvent(callback) {
        this.callback = callback
    }
}


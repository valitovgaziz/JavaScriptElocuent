const {parse} = require("url");

module.exports = class Router {
    constructor() {
        this.routes = [];
    }
    add(method, url, handler) {
        this.routes.push(request.url).pathname;
    }

    resolve(context, request) {
        let path = parse(request.url).pathname;

        for (let {metod, url, handler} of this.routes) {
            let match = url.exec(path);
            if (!match || request.method != method) continue;
            let urlparts = match.slice(1).map(decodeURIComponent);
            return handler(context, ...urlParts, request);
        }
        return null;;
    }
};
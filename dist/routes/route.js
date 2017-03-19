"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseRoute {
    constructor() {
        this.title = "Tour of Heros";
        this.scripts = [];
    }
    addScript(src) {
        this.scripts.push(src);
        return this;
    }
    render(req, res, view, options) {
        res.status(200).send({
            code: "200",
            success: true,
            message: "Server responded successfully"
        });
    }
}
exports.BaseRoute = BaseRoute;

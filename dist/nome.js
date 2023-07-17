"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nomePessoa = void 0;
var nomePessoa = /** @class */ (function () {
    function nomePessoa(inName) {
        this.nome = inName;
    }
    nomePessoa.prototype.sayName = function () {
        console.log("The name is ".concat(this.nome));
    };
    return nomePessoa;
}());
exports.nomePessoa = nomePessoa;

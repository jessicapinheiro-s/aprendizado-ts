"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Pessoa.prototype.DataNascimento = function () {
        var hoje = new Date();
        var idade = hoje - this.idade;
        console.log(idade);
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;

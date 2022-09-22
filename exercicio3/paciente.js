"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paciente = void 0;
var Paciente = /** @class */ (function () {
    function Paciente(nome, diaInternacao, sexo, idade) {
        this.nome = nome;
        this.diaInternacao = diaInternacao;
        this.sexo = sexo;
        this.idade = idade;
    }
    Paciente.prototype.getNome = function () {
        return this.nome;
    };
    Paciente.prototype.getData = function () {
        return this.diaInternacao;
    };
    Paciente.prototype.getSexo = function () {
        return this.sexo;
    };
    Paciente.prototype.getIdade = function () {
        return this.idade;
    };
    return Paciente;
}());
exports.Paciente = Paciente;

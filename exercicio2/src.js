"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var conta_1 = require("./conta");
var conta = new conta_1.Conta({
    nome: 'herbert',
    valor: 100,
    cpf: 12345678901
});
console.clear();
console.log("digite o nome do usu\u00E1rio: ".concat(conta.getNome()));
console.log("digite quanto tem  na conta: R$ ".concat(conta.getQuantia()));
console.log("digite o cpf de usu\u00E1rio: ".concat(conta.getCpf()),"\n");
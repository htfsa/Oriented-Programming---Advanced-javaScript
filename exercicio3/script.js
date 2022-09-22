"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Paciente_1 = require("./Paciente");
var paciente = new Paciente_1.Paciente('Herbert', '18/07/2020', 'masculino', 21);
console.clear();
console.log("digite o nome do paciente: ".concat(paciente.getNome()));
console.log("digite o sexo do paciente: ".concat(paciente.getSexo()));
console.log("digite a data de interna\u00E7\u00E3o: ".concat(paciente.getData()));
console.log("digite a idade do paciente: ".concat(paciente.getIdade()));

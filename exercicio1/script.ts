import { Patinete } from "./Patinet";
import PromptSync = require('prompt-sync');

const prompt = PromptSync();

const qtdRodas = Number(prompt('diga quantas rodas tem o patinet: '));
const cor = prompt('qual cor tem o patinet? ');
const tamanho = Number(prompt('qual o tamanho do patinet: '));

const patinete: Patinete = new Patinete({
    qtdRodas,
    cor,
    tamanho
});

console.log('\no patinet tem ${patinete.qtdRodas} rodas');
console.log('o patinet tem a cor ${patinete.cor}');
console.log('o patinet tem ${patinete.tamanho} de tamanho');
patinete.movimento;
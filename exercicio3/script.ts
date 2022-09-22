import { Paciente } from "./Paciente";
const paciente: Paciente = new Paciente('Herbert', '18/12/2020', 'masculino', 21);

console.clear();
console.log(`digite o nome do paciente: ${paciente.getNome()}`);
console.log(`digite o sexo do paciente: ${paciente.getSexo()}`);
console.log(`digite a data de internação: ${paciente.getData()}`);
console.log(`digite a idade do paciente: ${paciente.getIdade()}`);
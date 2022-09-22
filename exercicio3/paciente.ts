class Paciente{
    private nome: string;
    private diaInternacao: string;
    private sexo: string;
    private idade: number;

    constructor(nome: string, diaInternacao: string, sexo: string, idade: number){
        this.nome = nome;
        this.diaInternacao = diaInternacao;
        this.sexo = sexo;
        this.idade = idade;
    }
    public getNome(): string{
        return this.nome;
    }
    public getData(): string{
        return this.diaInternacao;
    }
    public getSexo(): string{
        return this.sexo;
    }
    public getIdade(): number{
        return this.idade;
    }
}
export{Paciente};
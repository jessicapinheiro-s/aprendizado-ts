export class NomePessoa {
    nome: string;
    
    constructor(inName: string){
        this.nome = inName;
    }
    sayName(){
        console.log(`The name is ${this.nome}`);
        return this.nome;
    }

}



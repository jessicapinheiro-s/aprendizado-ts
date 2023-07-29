export class Reembolso {
    nome:string;
    valor:number;

    constructor(nome:string, valor:number){
        this.nome = nome;
        this.valor = valor;
    }
    
    valorReemb(){
        console.log(this.valor - 5);
    }
}

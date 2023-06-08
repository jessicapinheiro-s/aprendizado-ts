//defineos subtipos do objeto

interface Comida{
    nome:string;
    valor:number;
}
interface Bebida{
    nome:string;
    valor:number;
}

const pedido: Array<Comida> = [
    {
        "nome": "hamburguer",
        "valor": 12
    },
    {
        "nome": "batata frita",
        "valor": 12
    },
    {
        "nome": "cheesebacon",
        "valor": 12
    },
    {
        "nome": "xsalada",
        "valor": 12
    }  
]


const bebida: Array<Bebida> = [
    {
        "nome": "coca",
        "valor": 12
    },
    {
        "nome": "fanta",
        "valor": 12
    },
    {
        "nome": "tubaina",
        "valor": 12
    }
]


let soma:number = bebida[0].valor + bebida[2].valor;
console.log(soma);
    
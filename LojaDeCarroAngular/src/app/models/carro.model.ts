import { Carroceria } from "./carroceria.model";
import { Combustivel } from "./combustivel.model";
import { Cores } from "./cores.model";
import { Marca } from "./marca.model";
import { Modelo } from "./modelo.model";
import { Usuario } from "./usuario.model";

export class Carro {
    id : number;
    nome : string;
    url : string;
    valor : number;
    placa : string;
    motor : string;
    anoFabricacao : number;
    carroceria : Carroceria;
    marca : Marca;
    cores : Cores;
    modelo : Modelo;
    usuario : Usuario;
    combustivel : Combustivel;
    
}
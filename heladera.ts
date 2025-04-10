import { Electrodomestico} from "./electrodomestico";
import { ModuloWifi } from "./modulowifi";
/////////////////HELADERA
export class Heladera extends Electrodomestico{
    private temperatura:number;
    constructor(pTemperatura:number,pMarca:string,pModelo:string,pEstaEncendido:boolean){
    super(pMarca,pModelo, pEstaEncendido);
    this.temperatura=pTemperatura;
    }
    getTemperatura(){
        return this.temperatura;
    }
    setTemperatura(pTemperatura:number){
        this.temperatura= pTemperatura;
    }
    /////////METODO HELADERA
    cambiarTemperatura(nuevaTemp: number){
        this.temperatura = nuevaTemp;
        console.log(`la nueva temperatura es: ${this.temperatura}`);
    }

};
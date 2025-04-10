import { SmartHeladera } from "./smartheladera";
import { ModuloWifi } from "./modulowifi";

/////////ELECTRODOMESTICO
export class Electrodomestico {
    private marca: string;
    private modelo: string;
    private estaEncendido: boolean;
    constructor(pMarca: string, pModelo: string, pEstaEncendido: boolean) {
        this.marca = pMarca;
        this.modelo = pModelo;
        this.estaEncendido = pEstaEncendido;
    }
    getMarca() {
        return this.marca;
    }
    setMarca(pMarca: string): void {
        this.marca = pMarca
    }
    getModelo() {
        return this.modelo;
    }
    setModelo(pModelo: string): void {
        this.modelo = pModelo
    }

    public getEstaEncendido() {
        return this.estaEncendido;
    }
    public setEstaEncendido(pEstaEncendido: boolean): void {
        this.estaEncendido = pEstaEncendido;
    }
    ////////////METODO ELECTRO
    public encender(pEstaEncendido) {
        if (pEstaEncendido == false) {
            this.setEstaEncendido(true)
            console.log("se encedió la heladera")
        }
    }
    public apagar(pEstaEncendido) {
        if (pEstaEncendido == true) {
            this.setEstaEncendido(false)
            console.log("se apagó la heladera.")
        }
    }
    
    public mostrarInfo(smartHeladera:SmartHeladera) {
        console.log(`Marca: ${smartHeladera.getMarca()}`)
        console.log(`Modelo: ${smartHeladera.getModelo()}`)
        console.log(`Estado de la Heladera: ${this.estaEncendido ? "Encendida" : "Apagada"}`);
        console.log(`Temperatura: ${smartHeladera.getTemperatura()}`);
        console.log(`Modulo Wifi: ${smartHeladera.getTieneModuloWifi()}`);
     }
     
}

/*
En SmartHeladera, agregar un atributo moduloWifi: ModuloWifi y usarlo para:
simular una conexión online (conectarInternet())
mostrar la velocidad de conexión
*/
import { ModuloWifi } from "./modulowifi";
import { Heladera } from "./heladera";
export class SmartHeladera extends Heladera {
    private tieneModuloWifi: ModuloWifi;

    constructor(pTieneModuloWifi: ModuloWifi, pTemperatura: number, pMarca: string, pModelo: string, pEstaEncendido: boolean) {
        super(pTemperatura, pMarca, pModelo, pEstaEncendido);
        this.tieneModuloWifi = pTieneModuloWifi;
    }
    getTieneModuloWifi() {
        return this.tieneModuloWifi;
    }
    setTieneModuloWifi(pTieneModuloWifi: ModuloWifi) {
        this.tieneModuloWifi = pTieneModuloWifi;
    }
    ////////////METODO HELADERA SMART
    public conectarInternet() {
    console.log(`se encuentra conectado a internet por su placa Wifi a ${this.tieneModuloWifi.getVelocidadMbps()} Mbps y ${this.tieneModuloWifi.getFrecuenciaGHz()} Ghz`);
     };
}
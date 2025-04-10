/*
Crear clase ModuloWifi con atributos:
velocidadMbps (number)
frecuenciaGHz (number) Métodos getter y setter.
*/
export class ModuloWifi {
    private velocidadMbps: number;
    private frecuenciaGHz: number;

    constructor(pVelocidadMbps: number, pFrecuenciaGHz: number) {
        this.velocidadMbps = pVelocidadMbps;
        this.frecuenciaGHz = pFrecuenciaGHz;
    }
    getVelocidadMbps() {
        return this.velocidadMbps;
    }
    setVelocidadMbps(pVelocidadMbps: number) {
        this.velocidadMbps = pVelocidadMbps;
    }
    getFrecuenciaGHz() {
        return this.frecuenciaGHz;
    }
    setFrecuenciaGHz(pFrecuenciaGHz: number) {
        this.frecuenciaGHz = pFrecuenciaGHz;
    }
    ////////////MODULO WIFI
}
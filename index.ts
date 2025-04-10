import { Electrodomestico } from "./electrodomestico";
import { Heladera } from "./heladera";
import { ModuloWifi } from "./modulowifi";
import { SmartHeladera } from "./smartheladera";
console.clear();
let moduloWifi1 = new ModuloWifi(150,300);
let smartHeladera1 = new SmartHeladera(moduloWifi1,35,"Philips","No Frost",true);
let electrodomestico1 = new Electrodomestico("","",true)
console.log("----------Informacion de la heladera----------")
smartHeladera1.mostrarInfo(smartHeladera1);

//apagar
console.log("----------este punto apaga la heladera----------")
console.log(smartHeladera1.apagar(smartHeladera1.getEstaEncendido()));
//encender
console.log("----------este punto enciende la heladera----------")
smartHeladera1.encender(smartHeladera1.getEstaEncendido())

//conectar internet
console.log("----------este punto conecta a Internet----------")
smartHeladera1.conectarInternet();

//cambiar temperatura
smartHeladera1.cambiarTemperatura(50);

console.log(smartHeladera1);
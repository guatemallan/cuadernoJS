/* PROYECTO MUNDO PC

Ver archivo 03.proyectoMundoPc.UML.png para diagrama de clases.
*/

class DispositivoEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
    toString(){
        return `tipoEntrada: ${this._tipoEntrada}, Marca: ${this._marca}`;
    }
}
class Raton extends DispositivoEntrada{
    static contadorRatones = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada,marca);
        this._idRaton = ++Raton.contadorRatones;
    }
    get idRaton(){
        return this._idRaton;
    }
    toString(){
        return `Ratón: [idRaton: ${this._idRaton}, ${super.toString()}]`;
    }
}
class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada,marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }
    get idTeclado(){
        return this._idTeclado;
    }
    toString(){
        return `Teclado: [idTeclado: ${this._idTeclado}, ${super.toString()}]`;
    }
}
class Monitor{
    static contadorMonitores = 0;
    constructor(marca, tamano){
        this._idMonitor = ++ Monitor.contadorMonitores;
        this._marca = marca;
        this._tamano = tamano;
    }
    get idMonitor(){
        return this._idMonitor;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
    get tamano(){
        return this._tamano;
    }
    set tamano(tamano){
        this._tamano = tamano;
    }
    toString(){
        return `Monitor: [idMonitor: ${this._idMonitor}, Marca: ${this._marca}, Tamaño: ${this.tamano}]`;
    }
}
class Computadora{
    static contadorComputadoras = 0;
    constructor(nombre, monitor, teclado, raton){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._raton = raton;
        this._teclado = teclado;
    }
    get idComputadora(){
        return this._idComputadora;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get monitor(){
        return this._monitor;
    }
    set monitor(monitor){
        this._monitor = monitor;
    }
    get teclado(){
        return this._monitor;
    }
    set teclado(teclado){
        this._teclado = teclado;
    }
    get raton(){
        return this._raton;
    }
    set raton(raton){
        this._raton = raton;
    }
    toString(){
        return `Computadora ${this._idComputadora}: ${this._nombre}
  ${this._monitor.toString()}
  ${this._raton.toString()}
  ${this._teclado.toString()}`;
    }
}
class Orden{
    static contadorOrdenes = 0;
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }
    get idOrden(){
        return this._idOrden;
    }
    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }
    toString(){
        let descripcionOrden = `Orden: ${this._idOrden}, Computadoras:\n`;
        for (let computadora of this._computadoras){
            descripcionOrden += computadora.toString() + '\n';
        }
        return descripcionOrden;
    }
    mostrarOrden(){
        console.log(this.toString());
    }
}

// 

let ratonUno = new Raton('Bluetooth', 'Microsoft');
console.log(ratonUno.toString());

let tecladoUno = new Teclado('USB A', 'Logitech');
console.log(tecladoUno.toString());

let monitorUno = new Monitor('Dell', '17 pulgadas');
console.log(monitorUno.toString());

let computadoraUno = new Computadora('Desktop Dell 880', monitorUno, tecladoUno, ratonUno);
console.log(computadoraUno.toString());

let ordenUno = new Orden();
ordenUno.agregarComputadora(computadoraUno);

ordenUno.mostrarOrden();

let ratonDos = new Raton('USB C', 'Logitech');

let tecladoDos = new Teclado('USB C', 'Logitech');

let monitorDos = new Monitor('AOC', '17 pulgadas');

let computadoraDos = new Computadora('MundoPC XI', monitorDos, tecladoDos, ratonDos);

ordenUno.agregarComputadora(computadoraDos);

ordenUno.mostrarOrden();
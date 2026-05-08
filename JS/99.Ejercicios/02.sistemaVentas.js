/* EJEMPLO SISTEMA DE VENTAS

Clases:
    - Producto
    - Orden
*/

class Producto{
    static contadorProductos = 0;
    constructor (nombre, precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }
    get idProducto(){
        return this._idProducto;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get precio(){
        return this._precio;
    }
    set precio(precio){
        this._precio = precio;
    }
    toString(){
        return `  idProducto: ${this._idProducto} Nombre: ${this._nombre} Precio: ${this._precio}`;
    }
}

class Orden{
    static contadorOrdenes = 0;
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        // this._contadorProductosAgregados = 0;
    }
    static get MAX_PRODUCTOS(){
        return 5;
    }
    get idOrden(){
        return this._idOrden;
    }
    agregarProducto(producto){
        // en Orden.MAX_PRODUCTOS no se pone (), porque lo trata como una constante
        if (this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
            // this._contadorProductosAgregados++;
            // otra manera de agregar el producto
            // this._productos[this._contadorProductosAgregados] = producto;
        } else console.log('No se pueden agregar mas productos!');
    }
    calcularTotal(){
        let totalVenta = 0;
        for(let producto of this._productos){
            totalVenta += producto.precio;
        }
        return totalVenta;
    }
    mostrarOrden(){
        let productosOrden = '';
        let contador = 0;
        for (let producto of this._productos){
            productosOrden += 'Linea ' + (++contador) + producto.toString() + '\n'\\;
        }
        // no olvidar parentesis
        console.log(`Orden #: ${this._idOrden}
        Total:      ${this.calcularTotal()}
        Detalle:
${productosOrden}
        `);
    }
}

///

let productoUno = new Producto('Camisa', 25.50);
let productoDos = new Producto('Pantalón', 105.75);
console.log(productoUno.toString());
console.log(productoDos.toString());


// Relación de agregación. Orden y Prodcto pueden existir sin el otro
let ordenUno = new Orden();
ordenUno.agregarProducto(productoUno);
ordenUno.agregarProducto(productoDos);

ordenUno.mostrarOrden();

ordenUno.agregarProducto(productoUno);

ordenUno.mostrarOrden();

ordenUno.agregarProducto(productoDos);

ordenUno.mostrarOrden();

ordenUno.agregarProducto(productoUno);

ordenUno.agregarProducto(productoUno); // 'No se pueden agregar mas productos!'

ordenUno.mostrarOrden();


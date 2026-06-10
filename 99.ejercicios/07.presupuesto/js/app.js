// elementos iniciales
const ingresos = [
    new Ingreso('Salario', 2100.00),
    new Ingreso('Venta', 1500.00),
    new Ingreso('Bono', 250.00),
];

const egresos = [
    new Egreso('Internet', 250.00),
    new Egreso('Renta', 1000.00),
    new Egreso('Alimentos', 500.00),
    new Egreso('Estudios', 600.00),
    new Egreso('Energía Eléctrica', 38.76),
    new Egreso('Ahorro', 500),
    new Egreso('Comida chuchos', 125)
];

let cargarApp = () => {
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
};

let totalIngresos = () => {
    let totalIngresos = 0;
    for(let ingreso of ingresos)
        totalIngresos += ingreso.valor;
    
    return totalIngresos;
};

let totalEgresos = () => {
    let totalEgresos = 0;
    for(let egreso of egresos)
        totalEgresos += egreso.valor;
    
    return totalEgresos;
};

let cargarCabecero = () => {
    let presupuestoTotal = formatoMoneda(totalIngresos() - totalEgresos());
    let porcentajeEgreso = formatoPorcentaje(totalEgresos() / totalIngresos());

    document.getElementById('presupuesto').innerHTML = presupuestoTotal;
    document.getElementById('porcentajeEgreso').innerHTML = porcentajeEgreso;
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());
};

// INTERNACIONALIZACIÓN para cargar formatos
const formatoMoneda = (valor) => {
    return valor.toLocaleString('es-GT', {style:'currency', currency:'GTQ', minimumFractionDigitis:2});
    // PESO MXN return valor.toLocaleString('es-MX', {style:'currency', currency:'MXN', minimumFractionDigitis:2});
    // EURO return valor.toLocaleString('es-ES', {style:'currency', currency:'EUR', minimumFractionDigitis:2});
    // USD return valor.toLocaleString('en-US', {style:'currency', currency:'USD', minimumFractionDigitis:2});
};

const formatoPorcentaje = (valor) => {
    return valor.toLocaleString('es-GT', {style:'percent', minimumFractionDigitis:2});
};

const cargarIngresos = () =>{
    let ingresosHTML = '';
    for(let ingreso of ingresos){
        ingresosHTML += crearIngresoHTML(ingreso);
    }

    document.getElementById('lista-ingresos').innerHTML = ingresosHTML;
};

const crearIngresoHTML = (ingreso) =>{
    let ingresoHTML = `
                <div class="elemento limpiarEstilos">
                    <div class="elemento_descripcion">${ingreso.descripcion}</div>
                    <div class="derecha limpiarEstilos">
                        <div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>
                        <div class="elemento_porcentaje">${formatoPorcentaje(ingreso.valor/totalIngresos())}</div>
                        <div class="elemento_eliminar">
                            <button class="elemento_eliminar--btn">
                                <ion-icon name="close-circle-outline" onclick='eliminarIngreso(${ingreso.idIngreso})' ></ion-icon>
                            </button>
                        </div>
                    </div>
                </div>`;
    return ingresoHTML;
};

const eliminarIngreso = (idIngreso) => {
    // con esta funcion flecha le estamos indicando a la funcion findIndex que retorne el índice del objeto ingreso que coincida en ID con el parametro que estamos enviando.
    // la función flecha actua como un ciclo for, para recorrer todos los ingresos
    let indiceEliminar = ingresos.findIndex(ingreso => ingreso.idIngreso === idIngreso);

    ingresos.splice(indiceEliminar, 1);

    cargarApp();
};

const cargarEgresos = () =>{
    let egresosHTML = '';
    for(let egreso of egresos){
        egresosHTML += crearEgresoHTML(egreso);
    }

    document.getElementById('lista-egresos').innerHTML = egresosHTML;
};

const crearEgresoHTML = (egreso) =>{
    let ingresoHTML = `
                <div class="elemento limpiarEstilos">
                    <div class="elemento_descripcion">${egreso.descripcion}</div>
                    <div class="derecha limpiarEstilos">
                        <div class="elemento_valor">${formatoMoneda(egreso.valor)}</div>
                        <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor/totalEgresos())}</div>
                        <div class="elemento_eliminar">
                            <button class="elemento_eliminar--btn">
                                <ion-icon name="close-circle-outline" onclick='eliminarEgreso(${egreso.idEgreso})' ></ion-icon>
                            </button>
                        </div>
                    </div>
                </div>`;
    return ingresoHTML;
};

const eliminarEgreso = (idEgreso) => {
    let indiceEliminar = egresos.findIndex(egreso => egreso.idEgreso === idEgreso);

    // splice elimina indices. si no se especifica el numero de elementos a eliminar, los elimina todos a partir del indice proporcionado.
    egresos.splice(indiceEliminar, 1);

    cargarApp();
};

let agregarDato = () => {
    let forma = document.forms['forma'];

    let tipo = forma['tipo'];
    let descripcion = forma['descripcion'];
    let valor = forma['valor'];

    if(descripcion.value !== '' && valor.value !== ''){
        if(tipo.value === 'ingreso'){
            // se convierte el valor string a numerico con Number()
            ingresos.push(new Ingreso(descripcion.value, Number(valor.value)));
        }else if(tipo.value === 'egreso'){
            // sintaxis simplificada para convertir string a numero con +
            egresos.push(new Egreso(descripcion.value, +valor.value));
        }
    }
    cargarApp();
    // limpiamos los campos
    descripcion.value = '';
    valor.value = 0;
};
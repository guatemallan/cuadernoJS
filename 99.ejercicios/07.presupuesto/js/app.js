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

    new Egreso('Ahorro', 500)
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
                                <ion-icon name="close-circle-outline"></ion-icon>
                            </button>
                        </div>
                    </div>
                </div>`;
    return ingresoHTML;
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
                                <ion-icon name="close-circle-outline"></ion-icon>
                            </button>
                        </div>
                    </div>
                </div>`;
    return ingresoHTML;
};
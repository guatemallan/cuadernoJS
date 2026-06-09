const mostrarReloj = () => {
    let fecha = new Date();

    let hr = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let seg = formatoHora(fecha.getSeconds());

    document.getElementById('hora').innerHTML = `${hr}:${min}:${seg}`;

    const meses = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];
    const dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado'];

    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDay();
    let mes = meses[fecha.getMonth()];
    let fechatexto = `${diaSemana}, ${dia} ${mes} ${fecha.getFullYear()}`;

    document.getElementById('fecha').innerHTML = fechatexto;

    //animar
    // classlist devuelve una lista de todos los elementos con esa clase
    // toggle: si esta aplicado lo quita, y si no lo pone
    document.getElementById('contenedor').classList.toggle('animar');
}

const formatoHora = (hora) => {
    if (hora < 10)
        hora = '0' + hora;
    
    return hora;
}

// set interval
setInterval(mostrarReloj, 1000);
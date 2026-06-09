const personas = [
    new Persona('Laika', 'Perrito'),
    new Persona('Neil', 'Armstrong'),
    new Persona('Yuri', 'Gagarin')
]

function mostrarPersonas(){
    console.log('mostrando personas...');

    let texto = '';
    for (let persona of personas){
        console.log(persona);
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
    }

    document.getElementById('personas').innerHTML = texto;
}

function agregarPersona(){
    // esta es otra forma de acceder a los forms desde el DOM
    const forma = document.forms['forma'];
    const nombre = forma['nombre'];
    const apellido = forma['apellido'];

    if (nombre.value != '' && apellido.value != ''){
        const persona = new Persona(nombre.value, apellido.value);
    
        console.log(persona);
        personas.push(persona);
    
        mostrarPersonas();
    }else console.log('No hay información de persona para agregar');

}
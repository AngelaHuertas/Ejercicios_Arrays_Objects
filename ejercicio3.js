let atenciones = [];
let atencionesTelefonicas = [];
let atencionesEstudiantes = [];
let atencionesDirectivos = [];
let atencionesTransferidas = [];

while(true){
function solicitarAtencion() {
    let cedula = prompt("Ingrese su número de cédula:");
    let tipoAtencion = Number(prompt("Seleccione el tipo de atención: 1. Llamada Telefónica 2. Asesoría"));

    switch (tipoAtencion) {
        case 1:
            atenciones.push(1);
            atencionesTelefonicas.push(1);
            break;
        case 2:
            let tipoAcesoria = Number(prompt(`Elija tipo de asesoria:
                1. Asesoria estudiante.
                2. Asesoria Directivo.`))
                switch(tipoAcesoria){
                    case 1: 
                    atenciones.push(1);
                    atencionesEstudiantes.push(1);
                    alert(`Será atendido en poco tiempo por medio de chat.`)
                    let transferir = confirm("¿Desea transferir la asesoría a una llamada telefónica?");
                    if(transferir && tipoAtencion !== 1){
                        atencionesTransferidas.push(1);
                        atencionesEstudiantes.shift();
                    }
                    break;

                    case 2:
                        atenciones.push(1);
                        atencionesDirectivos.push(1);
                        alert(`Será atendido en poco tiempo por medio de chat`)
                        let transferir2 = confirm("¿Desea transferir la asesoría a una llamada telefónica?");
                        if(transferir2 && tipoAtencion !== 1){
                            atencionesTransferidas.push(1);
                            atencionesDirectivos.shift();
                        }
                        break;
                    default:
                alert("Opción no válida. Intente de nuevo.");
                return;
                }
            break;

        default:
            alert("Opción no válida. Intente de nuevo.");
            return;
    }

    mostrarEstadisticas();
}

function mostrarEstadisticas() {
    alert(`Estadísticas de atención: 
        Total de usuarios atendidos: ${atenciones.length}  
        Llamadas telefónicas: ${atencionesTelefonicas.length} 
        Asesorías a estudiantes: ${atencionesEstudiantes.length} 
        Asesorías a directivos: ${atencionesDirectivos.length} 
        Transferencias a llamadas telefónicas: ${atencionesTransferidas.length}`);
}

solicitarAtencion();
}

let colaEspera = [1, 2];
let contadorTurnos = colaEspera[colaEspera.length - 1];

while(true){
function tomarTurno() {
    contadorTurnos++;
    colaEspera.push(contadorTurnos);
    alert(`Hola, bienvenido/a al banco MaxAhorro. Usted ha tomado el turno número: ${contadorTurnos}`);
    mostrarContadorTurnos();
    espera();
}


function espera() {
    if (colaEspera.length > 0) {
        alert(`Clientes en la cola de espera: ${colaEspera.join(', ')}`);
    } else {
        alert("No hay clientes en la cola de espera.");
    }
}


function llamarCliente() {
    if (colaEspera.length > 0) {
        const turnoLlamado = colaEspera.shift();
        alert(`Cliente con el turno número ${turnoLlamado}, por favor acérquese.`);
        espera();
    } else {
        alert("No hay clientes en la cola de espera.");
    }
}


function mostrarContadorTurnos() {
    alert(`Hasta ahora se han tomado ${contadorTurnos} turnos.`);
}


tomarTurno(); 
llamarCliente(); 
llamarCliente(); 
llamarCliente(); 
}
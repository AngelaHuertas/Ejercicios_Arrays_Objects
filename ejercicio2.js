let habitacionIndividual = [];
let habitacionDoble = [];
let habitacionFamiliar = [];

alert(`Bienvenido/a al programa de reserva del hotel Shani`);

while(true){
let nombre = prompt(`Ingrese su nombre: `);
let numeroPersonas = Number(prompt(`Ingrese número de personas: `));
let traeMascotas = prompt(`¿Trae mascotas? (Sí/No)`).toLowerCase();
let fecha = prompt(`Ingrese fecha de hospedaje (formato: Dia/Mes/Año A Dia/Mes/Año)`);
let fumar = prompt(`¿Alguna persona fuma? (Sí/No)`).toLowerCase();

let tipoHabitacion = '';

if (numeroPersonas <= 2) {
    tipoHabitacion = 'Individual';
} else if (numeroPersonas <= 4) {
    tipoHabitacion = 'Doble';
} else if (numeroPersonas <= 6) {
    tipoHabitacion = 'Familiar';
} else {
    alert('No hay habitaciones disponibles para más de 6 personas.');
}

if (tipoHabitacion === 'Individual' || tipoHabitacion === 'Doble') {
    if (traeMascotas === 'si') {
        alert('Las mascotas solo se permiten en habitaciones familiares.');
        let pregunta = prompt(`¿Desea reservar una habitación familiar?`).toLowerCase();
        if (pregunta === `si`) { 
            traeMascotas = 'si';
            tipoHabitacion = `Familiar`;
        } else {
            traeMascotas = `no`;
        }
    }
}

if (fumar === `si`) {
    alert('Las habitaciones para fumadores tiene un costo adicional.');
    fumar = 'si';
}

let reserva = {
    nombre: nombre,
    paisOrigen: prompt(`Ingrese su país de origen: `),
    numeroPersonas: numeroPersonas,
    fecha: fecha,
    traeMascotas: traeMascotas,
    fumar: fumar
};

if (tipoHabitacion === 'Individual') {
    habitacionIndividual.push(reserva);
} else if (tipoHabitacion === 'Doble') {
    habitacionDoble.push(reserva);
} else if (tipoHabitacion === 'Familiar') {
    habitacionFamiliar.push(reserva);
}

alert(`Reserva confirmada:
Nombre: ${nombre}
Tipo de Habitación: ${tipoHabitacion}
Número de Personas: ${numeroPersonas}
Fecha: ${fecha}
Trae Mascotas: ${traeMascotas}
Fumador: ${fumar}`);

let totalReservas = habitacionIndividual.length + habitacionDoble.length + habitacionFamiliar.length;

alert(`El hotel tiene un total de ${totalReservas} habitaciones reservadas.`);  
}
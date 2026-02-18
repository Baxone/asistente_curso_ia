import moment from 'moment';

// crear una funcion que me calcule la media, arrow function
const calcularMedia = (numeros: number[]): number => {
    const suma = numeros.reduce((acc, curr) => acc + curr, 0);
    return suma / numeros.length;
}

console.log(calcularMedia([1, 2, 3, 4, 5]));

// creame un funcion para validar si numero es par o impar, quiero devuelva un booleano
const esPar = (numero: number): boolean => {
    return numero % 2 === 0;
}


// TAB

//moment.js es una libreria para manejar fechas y horas, creame una funcion que me devuelva la fecha y hora actual
const fechaHoraActual = (): string => {
    return moment().format('YYYY-MM-DD HH:mm:ss');
}

console.log(fechaHoraActual());


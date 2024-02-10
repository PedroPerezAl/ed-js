//Creo una funcion para encontrar  el numero de veces que un patron determinado aparece en la cadena
function encontrarPatron(cadena, patron) {
    // Paso todo a minuscula para que no hayan problemas
    cadena = cadena.toLowerCase();
    patron = patron.toLowerCase();

    //Creo una variable para que me almacen las veces que aparecen los patrones
    let contador = 0;

    // Índice inicial para comenzar a buscar en la cadena
    let indice = cadena.indexOf(patron);

    // Mientras se encuentre el patrón en la cadena, incrementa el contador y busca la próxima ocurrencia
    while (indice !== -1) {
        contador++;
        indice = cadena.indexOf(patron, indice + 1);
    }

    return contador;
}

// Función para encontrar el número total de veces que los patrones del array aparecen en la cadena
function totalPatrones(cadena, arrayPatrones) {

    cadena = cadena.toLowerCase();

    // Contador para contar el total de veces que el patron aparece
    let total = 0;

    // Iterar sobre cada patrón en el array de patrones
    arrayPatrones.forEach(patron => {
        // Utilizo la función encontrarPatron para contar cuántas veces aparece cada patrón en la cadena
        total += encontrarPatron(cadena, patron);
    });


    return total;
}

// USO DEL PROGRAMA
let cadenaUsuario = prompt("Introduce una cadena de texto:");
let patrones = ["AA", "BCA", "RTB", "JT"];
console.log("Aparecen:", totalPatrones(cadenaUsuario, patrones) + "veces");

let mensaje = ("Cadena introducida: " + cadenaUsuario + "\nPatrones a buscar= " + patrones + ("\nAparecen: " + totalPatrones(cadenaUsuario, patrones)) + " veces")
//Muestro con un alert el mensaje con el texto y los resultados concatenados
alert(mensaje);

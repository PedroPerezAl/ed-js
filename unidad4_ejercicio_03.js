//Funcion para saber los numeros que hay pares 
function saberPares(arrayNumeros) {
    let contadorPares = 0;

    for (let i = 0; i < arrayNumeros.length; i++) {
        if (arrayNumeros[i] % 2 === 0 && arrayNumeros[i] !== 0) {
            contadorPares++;
        }
    }

    return contadorPares;
}

//Funcion para saber los numeros que hay impares 
function saberImpares(arrayNumeros) {
    let contadorImpares = 0;

    for (let i = 0; i < arrayNumeros.length; i++) {
        if (arrayNumeros[i] % 2 !== 0) {
            contadorImpares++;
        }
    }

    return contadorImpares;
}

//Funcion para sumar todos los numeros introducidos 
function sumaTotal(arrayNumeros) {
    let sumaTotal = 0;

    for (let i = 0; i < arrayNumeros.length; i++) {
        sumaTotal = sumaTotal + arrayNumeros[i];
    }

    return sumaTotal;
}

// Funcion para sacar la media, reutilizamos codigo llamando a las funciones creadas anteriormente
function mediaTotal(arrayNumeros) {
    let media = 0;
    media = (sumaTotal(arrayNumeros) / (saberPares(arrayNumeros) + saberImpares(arrayNumeros)));
    return media;
}

// Funcion para saber que número es mayor

function esMayor(arrayNumeros) {
    let mayor = 0;

    for (let i = 0; i <= arrayNumeros.length; i++) {

        if (arrayNumeros[i] > mayor) {
            mayor = arrayNumeros[i];
        }
    }
    return mayor
}


// Funcion para saber que número es menor

function esMenor(arrayNumeros) {
    let menor = arrayNumeros[0];

    for (let i = 0; i < arrayNumeros.length; i++) {

        if (arrayNumeros[i] < menor && arrayNumeros[i] !== 0) { // Marcamos que el 0 introducido para salir del programa no tiene que contar para saber cual es menor, porque si no nos sale siempre 0 en el resultado.
            menor = arrayNumeros[i];
        }
    }
    return menor;
}

//USO DEL PROGRAMA
let miArray = [];
let n, i = 0;
//pedimos los numeros y se guardan en el array

do {
    n = prompt("Introduce un numero mayor a 0");
    miArray[i] = parseInt(n);
    i++;
} while (n > 0);

let mensaje = ("Lista de numeros introducidos: " + miArray + ("\n Números pares: " + saberPares(miArray)) + ("\n Numeros impares: " + saberImpares(miArray)) + ("\nSuma total: " + sumaTotal(miArray)) + ("\nMedia: " + mediaTotal(miArray)) + ("\n Mayor: " + esMayor(miArray)) + ("\n Menor: " + esMenor(miArray)));

alert(mensaje);
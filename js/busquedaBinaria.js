/*var salirBoton = document.getElementById("salirBoton");
var container = document.getElementById("container");

function realizarBusqueda() {
    var numeros = document.getElementById("numInput").value.split(',').map(function(item) {
        return parseInt(item.trim());
    });

    var numeroBuscado = prompt("Ingrese el número que desea buscar:");

    if (!isNaN(numeroBuscado)) {
        // Asegurarse de que la lista esté ordenada antes de realizar la búsqueda binaria
        var listaOrdenada = numeros.slice().sort(function(a, b) {
            return a - b;
        });

        var resultado = busquedaBinaria(listaOrdenada, parseInt(numeroBuscado));
        mostrarResultados(numeros, resultado, parseInt(numeroBuscado));
    } else {
        alert("Por favor, ingrese un número válido.");
    }
}

function busquedaBinaria(listaX, valorBuscado) {
    var bajo = 0;
    var alto = listaX.length - 1;

    while (bajo <= alto) {
        var central = Math.floor((bajo + alto) / 2);

        if (listaX[central] === valorBuscado) {
            return central;
        } else if (listaX[central] < valorBuscado) {
            bajo = central + 1;
        } else {
            alto = central - 1;
        }
    }

    return -1;
}
function mostrarResultados(listaX, indiceEncontrado, valorBuscado) {
    var resultados = document.getElementById("resultados");

    container.classList.add("rotate"); // Aplicar la rotación al contenedor

    setTimeout(function() {
        container.classList.remove("rotate"); // Eliminar la clase de rotación después de la animación
        if (indiceEncontrado !== -1) {
            resultados.innerHTML = `Números ingresados: ${listaX.join(', ')}<br>El número ${valorBuscado} se encuentra en la posición ${indiceEncontrado + 1}.`;
        } else {
            resultados.innerHTML = `Números ingresados: ${listaX.join(', ')}<br>El número ${valorBuscado} no fue encontrado en la lista.`;
        }
        salirBoton.style.display = "block";
    }, 500); // 500 milisegundos, ajusta animación
}

function reiniciarPrograma() {
    container.classList.remove("rotate"); 
    document.getElementById("numInput").value = ""; 
    document.getElementById("resultados").innerHTML = ""; 
    salirBoton.style.display = "none"; // 
}

function salir() {
    alert("¡Gracias por usar la aplicación de búsqueda binaria!");
    reiniciarPrograma(); 
    
}

var salirBoton = document.getElementById("salirBoton");
var container = document.getElementById("container");

function realizarBusqueda() {
    var numeros = document.getElementById("numInput").value.split(',').map(function(item) {
        return parseInt(item.trim());
    });

    var numeroBuscado = prompt("Ingrese el número que desea buscar:");

    if (!isNaN(numeroBuscado)) {
        // Ordenar la lista antes de realizar la búsqueda binaria
        numeros.sort(function(a, b) {
            return a - b;
        });

        var resultado = busquedaBinaria(numeros, parseInt(numeroBuscado));
        mostrarResultados(numeros, resultado, parseInt(numeroBuscado));
    } else {
        alert("Por favor, ingrese un número válido.");
    }
}

function busquedaBinaria(listaX, valorBuscado) {
    var bajo = 0;
    var alto = listaX.length - 1;

    while (bajo <= alto) {
        var central = Math.floor((bajo + alto) / 2);

        if (listaX[central] === valorBuscado) {
            return central;
        } else if (listaX[central] < valorBuscado) {
            bajo = central + 1;
        } else {
            alto = central - 1;
        }
    }

    return -1;
}*/

var salirBoton = document.getElementById("salirBoton");
var container = document.getElementById("container");

function realizarBusqueda() {
    var numeros = document.getElementById("numInput").value.split(',').map(function(item) {
        return parseInt(item.trim());
    });

    var numeroBuscado = prompt("Ingrese el número que desea buscar:");

    if (!isNaN(numeroBuscado)) {
        // Ordenar la lista antes de realizar la búsqueda binaria
        numeros.sort(function(a, b) {
            return a - b;
        });

        var resultado = busquedaBinaria(numeros, parseInt(numeroBuscado));
        mostrarResultados(numeros, resultado, parseInt(numeroBuscado));
    } else {
        alert("Por favor, ingrese un número válido.");
    }
}

function busquedaBinaria(listaX, valorBuscado) {
    var bajo = 0;
    var alto = listaX.length - 1;

    while (bajo <= alto) {
        var central = Math.floor((bajo + alto) / 2);

        if (listaX[central] === valorBuscado) {
            return central;
        } else if (listaX[central] < valorBuscado) {
            bajo = central + 1;
        } else {
            alto = central - 1;
        }
    }

    return -1;
}

function mostrarResultados(listaX, indiceEncontrado, valorBuscado) {
    var resultados = document.getElementById("resultados");

    container.classList.add("rotate"); // Aplicar la rotación al contenedor

    setTimeout(function() {
        container.classList.remove("rotate"); // Eliminar la clase de rotación después de la animación
        if (indiceEncontrado !== -1) {
            resultados.innerHTML = `Números ingresados: ${listaX.join(', ')}<br>El número ${valorBuscado} se encuentra en la posición ${indiceEncontrado + 1}.`;
        } else {
            resultados.innerHTML = `Números ingresados: ${listaX.join(', ')}<br>El número ${valorBuscado} no fue encontrado en la lista.`;
        }
        salirBoton.style.display = "block";
    }, 500); // 500 milisegundos, ajusta animación
}

function reiniciarPrograma() {
    container.classList.remove("rotate"); 
    document.getElementById("numInput").value = ""; 
    document.getElementById("resultados").innerHTML = ""; 
    salirBoton.style.display = "none"; 
}

function salir() {
    alert("¡Gracias por usar la aplicación de búsqueda binaria!");
    reiniciarPrograma(); 
}

// Aquí puedes agregar más funciones o código según tus necesidades.

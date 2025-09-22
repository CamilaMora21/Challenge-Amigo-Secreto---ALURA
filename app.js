let listaAmigos = [];

//Esta función valida los nombres escritos y los agrega a la lista si pasa las validaciones
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim();

    if (nombre === '') {
        alert('Por favor, escribe algún nombre.');
        return;
    }

    if (listaAmigos.includes(nombre)) {
        alert('Este nombre ya está en la lista.');
        return;
    }

    listaAmigos.push(nombre);
    actualizarListaAmigos();
    
    inputAmigo.value = '';
    inputAmigo.focus();
}

// Función para actualizar la lista visual
function actualizarListaAmigos() {
    
    const listaHtml = document.getElementById('listaAmigos');
    listaHtml.innerHTML = '';

    listaAmigos.forEach(amigo => {
        const itemLista = document.createElement('li');
        itemLista.textContent = amigo;
        listaHtml.appendChild(itemLista);
    });
}

// Función para sortear un amigo secreto validando la lista de amigos actual
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('Debes agregar al menos un amigo para realizar el sorteo.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[indiceAleatorio];

    const resultadoHtml = document.getElementById('resultado');
    resultadoHtml.innerHTML = `<li>¡El amigo secreto es: <strong>${amigoSecreto}</strong>!</li>`;
}

// Inicializar la lista cuando se cargue la página
document.addEventListener('DOMContentLoaded', function() {
    actualizarListaAmigos();
});
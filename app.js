let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
    } else {
        amigos.push(nombre);
        agregarElementoLista(nombre, amigos.length);
        input.value = "";
    }
}

function agregarElementoLista(nombre, index) {
    let lista = document.getElementById("listaAmigos");
    let li = document.createElement("li");
    li.textContent = `${index}. ${nombre}`;
    li.classList.add("name-item");
    lista.appendChild(li);
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agrega amigos en el sorteo");
    } else {
        let resultadoLista = document.getElementById("resultado");
        resultadoLista.innerHTML = "<li class='result-item sorteando'>El amigo es: <strong id='nombre-sorteo'></strong></li>";
        let nombreSorteo = document.getElementById("nombre-sorteo");
        
        let creciendo = true;
        let fontSize = 1.5;
        let intervalo = setInterval(() => {
            let indiceTemporal = Math.floor(Math.random() * amigos.length);
            nombreSorteo.textContent = amigos[indiceTemporal];
            nombreSorteo.style.color = "red";
            
            // Animación de tamaño fluida
            if (creciendo) {
                fontSize += 0.1;
                if (fontSize >= 2) creciendo = false;
            } else {
                fontSize -= 0.1;
                if (fontSize <= 1.5) creciendo = true;
            }
            nombreSorteo.style.fontSize = `${fontSize}rem`;
        }, 100);
        
        setTimeout(() => {
            clearInterval(intervalo);
            let indiceAleatorio = Math.floor(Math.random() * amigos.length);
            let amigoSecreto = amigos[indiceAleatorio];
            nombreSorteo.textContent = amigoSecreto;
            nombreSorteo.style.color = "#05DF05"; // Coincide con el color del CSS
            nombreSorteo.style.fontSize = "2rem";
        }, 1000);
    }
}

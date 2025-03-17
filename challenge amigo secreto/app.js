// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el desafio del amigo secreto= [];
let amigo = [];
function agregarAmigo() {
    let imputAmigo = document.getElementById("amigo");
    let nombreAmigo = imputAmigo.value;
    
    if (!nombreAmigo) {
      alert("debes ingresar un nombre");
      return;
    }
    amigo.push(nombreAmigo);
    imputAmigo.value = "";
    imputAmigo.focus();
    renderizarAmigos();
}
 
function renderizarAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for(let i = 0; i < amigo.length; i++){
        let item = document.createElement("li");
        item.textContent = amigo[i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo(){
    if(amigo.length === 0){
        alert("Por favor, ingrese un amigo");
        return;
    }
    let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `Tu amigo secreto es: ${amigoSorteado}`;

}
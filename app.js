// Declaração das variáveis
let listaAmigos = [];
let nomeNaLista = document.getElementById('amigo');
let lista = document.getElementById('listaAmigos');
let listaResultado = document.getElementById('resultado');

// Faz a validação do nome na lista
function adicionarAmigo(){
    let nomeAmigo = document.querySelector('input').value;
    
    if (nomeAmigo == ''){
        alert('Por favor, digite um nome!');
        return;
    }
    else if (listaAmigos.includes(nomeAmigo)){
        alert('O nome digitado já foi adicionado!')
    }
    else{
        listaAmigos.push(nomeAmigo) // Inseri o nomeAmigo na listaAmigos
        nomeNaLista.value = ''; // Limpa a lista
        atualizarLista(); // Atualiza a lista com os dados inseridos
    }
}

// Limpa e atualiza a adiciona o nome como elemento dentro da lista
function atualizarLista(){
    lista.innerHTML = '';
    listaAmigos.forEach(amigo => {
        let item = document.createElement('li'); // Criação do elemento <li> e armazenamento na variavel item
        item.textContent = amigo; 
        lista.appendChild(item); // Adiciona um novo elemento na lista
    });
}

function sortearAmigo() {
    // Verifica se a lista possui algum elemento
    if (listaAmigos.length == 0){
        alert('Não contém nenhum nome na lista!');
        return;
    }
  
    let amigoSorteado = listaAmigos[parseInt(Math.random() * listaAmigos.length)];
    listaResultado.innerHTML = `<li>O amigo secreto sorteado é: ${amigoSorteado}</li>`;

}

function limparLista(){
    listaAmigos = [];
    listaResultado.innerHTML = '';
    atualizarLista();    
}

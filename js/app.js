// criar lista
let listaNomes = [];

// adicionar nome digitado na lista e no array
function adicionar() {
    let nome = document.getElementById('nome-amigo').value;
    let lista = document.getElementById('lista-amigos');
    listaNomes.push(nome);

    if (lista.textContent == '') {
        lista.textContent = nome;
    } else {
        lista.textContent = lista.textContent + (`, ${nome}`);
    }
    
    //limpar campo para digitar novo nome
    limparNome();
}

// botao sortear = embaralhar os nomes e mostrar lista
function sortear() {
    console.log (listaNomes);
}

// reset
function limparNome() {
    let nome = document.getElementById('nome-amigo');
    nome.value = '';
}

function reiniciar() {

}
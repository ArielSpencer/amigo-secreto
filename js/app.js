alert ('Bem-vindo ao sorteio de Amigo Secreto!\n\nRegras:\n1. Adicione os nomes dos participantes um por um.\n2. Não adicione nomes duplicados. Caso haja participantes com o mesmo nome, adicione o sobrenome ou um apelido para diferenciá-los.\n3. É necessário adicionar pelo menos três nomes para realizar o sorteio.\n\nDivirta-se!');

let listaNomes = [];

function adicionar() {
    let nome = document.getElementById('nome-amigo').value.toUpperCase();

    if (nome == '') {
        alert ('Por favor, digite um nome antes de adicionar.');
        return;
    }

    if (listaNomes.includes(nome)) {
        alert ('Este nome já foi adicionado. Por favor, insira um nome diferente.');
        limparNome();
        return;
    }

    let lista = document.getElementById('lista-amigos');
    listaNomes.push(nome);

        if (lista.textContent == '') {
            lista.textContent = nome;
        } else {
            lista.textContent = lista.textContent + (`, ${nome}`);
        }
    
        limparNome();
    }

function sortear() {
    if (listaNomes.length < 3) {
        alert ('É necessário adicionar pelo menos três nomes para realizar o sorteio.');
        return;
    }

    embaralha(listaNomes);
    let sorteio = document.getElementById('lista-sorteio');

    if (sorteio.innerHTML != '') {
        sorteio.innerHTML = '';
    }

    for (let i = 0; i < listaNomes.length; i++) {
        if (i == listaNomes.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + listaNomes[i] + ' --> ' + listaNomes[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + listaNomes[i] + ' --> ' + listaNomes[i + 1] + '<br>';
            }
    }
}

// fonte função embaralhar: http://cangaceirojavascript.com.br/como-embaralhar-arrays-algoritmo-fisher-yates/
function embaralha(lista) {

    let indice = lista.length
    
    while(indice) {
        const indiceAleatorio = Math.floor(Math.random() * indice--);
        [lista[indice], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice]];
    }
}

function limparNome() {
    let nome = document.getElementById('nome-amigo');
    nome.value = '';
}

function reiniciar() {
    listaNomes = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}
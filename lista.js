const listas = JSON.parse(localStorage.getItem("listas")) || [];
const index = localStorage.getItem("listaSelecionada");

function verLista(){
    const nome = document.getElementById('nomeDaLista');
    const conteiner = document.getElementById('lista')
    nome.innerHTML = listas[index].nome;
    for(let i = 0; i < listas[index].itens.length; i++){
        const item = document.createElement('p');
        item.textContent = listas[index].itens[i];
        conteiner.appendChild(item);
    }
}

function addItem(){
    const item = document.getElementById('novoItem').value;
    listas[index].itens.push(item);
    localStorage.setItem("listas", JSON.stringify(listas));
    window.location.reload();
}

verLista();
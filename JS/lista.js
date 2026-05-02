const listas = JSON.parse(localStorage.getItem("listas")) || [];
const index = localStorage.getItem("listaSelecionada");

function verLista(){
    const nome = document.getElementById('nomeDaLista');
    const conteiner = document.getElementById('lista')
    nome.innerHTML = listas[index].nome;
    for(let i = 0; i < listas[index].itens.length; i++){
        const item = document.createElement('p');
        const btnExcluir = document.createElement('button');
        const btnCheck = document.createElement('button');

        item.textContent = listas[index].itens[i].nome;

        btnExcluir.textContent = "Excluir";
        btnExcluir.onclick = () => excluirItem(i);

        btnCheck.textContent = "Feito";
        btnCheck.onclick = () => checkItem(i);

        conteiner.appendChild(item);
        conteiner.appendChild(btnExcluir);
        conteiner.appendChild(btnCheck);
    }
}

function addItem(){
    const item = document.getElementById('novoItem').value;
    const obj = {
        nome: item,
        status: 'pendente'
    }
    listas[index].itens.push(obj);
    localStorage.setItem("listas", JSON.stringify(listas));
    window.location.reload();
}

function excluirItem(x){
    listas[index].itens.splice(x, 1);
    localStorage.setItem("listas", JSON.stringify(listas));
    window.location.reload();
}

function checkItem(x){
    if(listas[index].itens[x].status == 'pendente'){
        listas[index].itens[x].status = 'feito';
    }else{
        listas[index].itens[x].status = 'pendente'
    }
}

verLista();
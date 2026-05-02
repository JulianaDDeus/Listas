function mostrarListas(){
    const listas = JSON.parse(localStorage.getItem('listas')) || [];
    const conteiner = document.getElementById('minhasListas');
    if(listas == null || listas.length == 0){
        const aviso = document.createElement('p');
        aviso.id = 'aviso';
        aviso.textContent = "Você ainda não criou nenhuma lista";
        conteiner.appendChild(aviso);
        return;
    }
    for(let i = 0; i < listas.length; i++){
        const item = document.createElement('div');
        const nome = document.createElement('p');
        const link = document.createElement('a');
        const btnLista = document.createElement('button');
        const btnExcluir = document.createElement('button');

        link.href = "./verLista.html";
        link.appendChild(btnLista);

        btnLista.textContent = "Ver lista";
        btnLista.onclick = () => { localStorage.setItem("listaSelecionada", i);};

        btnExcluir.textContent = "Excluir"
        btnExcluir.onclick = () => excluirLista(i);

        nome.textContent = listas[i].nome;


        item.appendChild(nome);
        item.appendChild(link);
        item.appendChild(btnExcluir);

        conteiner.appendChild(item);
    }
}

function addLista(){
    const listas = JSON.parse(localStorage.getItem('listas')) || [];
    const nomeDaLista = document.getElementById('nomeLista').value;
    let itens;
    if(nomeDaLista == null || nomeDaLista.length == 0){
        window.alert("Você precisa dar um nome à lista");
        return;
    }
    const obj = {
        nome: nomeDaLista,
        itens: []
    }
    listas.push(obj);
    localStorage.setItem("listas", JSON.stringify(listas));
}

function excluirLista(x){
    const listas = JSON.parse(localStorage.getItem("listas")) || [];
    listas.splice(x, 1);
    localStorage.setItem("listas", JSON.stringify(listas));
    window.location.reload();
}

mostrarListas();
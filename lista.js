function verLista(){
    const listas = JSON.parse(localStorage.getItem("listas")) || [];
    const index = localStorage.getItem("listaSelecionada");

    const nome = document.getElementById('nomeDaLista');
    nome.innerHTML = listas[index].nome;
}

verLista();
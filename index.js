function addLista(){
    let nome = document.getElementById("nomeLista").value;

    let obj = {
        nome: nome,
        itens: []
    }

    let listas = JSON.parse(localStorage.getItem("listas")) || [];

    listas.push(obj);

    localStorage.setItem("listas", JSON.stringify(listas));
}

function mostrarListas(){ 
    const container = document.getElementById("minhasListas"); 

    const aviso = document.createElement("p"); 

    aviso.textContent = "Você ainda não tem listas criadas"; 

    let listas = JSON.parse(localStorage.getItem("listas")); 

    if(listas == null){ 
        const aviso = document.createElement("p"); 

        aviso.textContent = "Você ainda não tem listas criadas";

        container.appendChild(aviso); 
    }else{
        for(let i = 0; i < listas.length; i++){
            const containerLista = document.createElement("ul");
            const itemLista = document.createElement("li");
            const nomeLista = document.createElement("h2");
            nomeLista.textContent = listas[i].nome;
            container.appendChild(containerLista);
            containerLista.appendChild(itemLista);
            itemLista.appendChild(nomeLista);
        }
    }
}

mostrarListas();
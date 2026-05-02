function addLista(){
    let nome = document.getElementById("nomeLista").value;
    let items = document.getElementById("inputItem").value;

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
let x = 0;
function inputItem(){
    let container = document.getElementById("inputItem");
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "item" + x);
    container.appendChild(input);
    x++;
}

mostrarListas();
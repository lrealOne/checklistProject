const checkList = () => {

    const addTarefa = document.querySelector(".addNovaTarefa")
    const btnAdd = document.querySelector(".btnEnviar")
    const toDoList = document.querySelector(".lista")


    //adicionando evento quando clico no spacebar
    addTarefa.addEventListener("keypress", (event) => {
        if (event.keyCode === 13){
            if (!addTarefa.value) return;
            criaTarefa(addTarefa.value);
        };
    });

    //função para criação de <li>
    const criaLi = () => {
        const li = document.createElement("li")
        return li;
    }

    //função para a criação das tarefas
    const criaTarefa = (texto) => {
        const li = criaLi();
        li.innerHTML = texto;
        toDoList.appendChild(li);
        clearInput();
        newBtn(li)
    }

    // função para limpar o input sempre que adicionar um item
    const clearInput = () => {
        addTarefa.value = "";
        addTarefa.focus();
    }

    // função para a utilização do botao enviar
    btnAdd.addEventListener("click", (event) => {
        if (!addTarefa.value) return;
        criaTarefa(addTarefa.value);
    })

    // função que cria um novo botão para cada item adicionado
    const newBtn = (li) => {
        li.innerHTML += ""
        const btn = document.createElement("button");
        btn.innerText = "Apagar";
        btn.setAttribute("class", "delete")
        btn.setAttribute("title", "Apagar tarefa")
        li.appendChild(btn);
    }


}

checkList();
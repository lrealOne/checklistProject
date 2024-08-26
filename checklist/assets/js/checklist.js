const checkList = () => {

    const addTarefa = document.querySelector(".addNovaTarefa")
    const btnAdd = document.querySelector(".btnEnviar")
    const lista = document.querySelector(".lista")


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
        li.setAttribute("class", "tarefa")
        lista.appendChild(li);
        clearInput();
        newBtn(li);
        saveList();
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
        const btn1 = document.createElement("button");
        btn1.innerText = " Apagar";
        btn1.setAttribute("class", "delete")
        btn1.setAttribute("title", "Apagar tarefa")

        const btn2 = document.createElement("button");
        btn2.innerText = "Riscar";
        btn2.setAttribute("class", "st")
        btn2.setAttribute("title", " Riscar tarefa")
        li.appendChild(btn1);
        li.appendChild(btn2)
    }

    document.addEventListener("click", (event) => {
        const element_ = event.target;
        
        if (element_.classList.contains("delete")){
            element_.parentElement.remove();
        }
        saveList()
    })

    document.addEventListener("click", (event) => {
        const el = event.target;

        if (el.classList.contains("st")){
            el.parentElement.classList.add("strike");
        }
        saveList()
    })

    const saveList = () => {
        const listLi = lista.querySelectorAll("li")
        const toDoList = [];

        for (let list of listLi){;
            let tarefaText = list.innerText;
            tarefaText = tarefaText.replace("Apagar", "").trim()
            tarefaText = tarefaText.replace("Riscar", "").trim()
            toDoList.push(tarefaText)
        }
        
        const tarefasJSON = JSON.stringify(toDoList)
        localStorage.setItem("tarefas", tarefasJSON)
    }

    const readSaveList = () => {
    const tarefas = localStorage.getItem("tarefas")
    const turnJSON = JSON.parse(tarefas)

    for (tarefa of turnJSON) {
            criaTarefa(tarefa)
        }
    }
    readSaveList()
}

checkList()
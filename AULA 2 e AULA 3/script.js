function adicionarTarefa() {

    //Recebe o valor do input do usuário
    const inputTarefa = document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value.trim()
    
    let mensagem = document.getElementById("mensagem")

    // Se o valor do input for vazio então mostre uma mensagem de erro para o usuário
    if (tarefa == "") {
        //mostre uma mensagem de erro
        let mensagemErro = "Digite uma tarefa para adiciona-la a sua lista!"
        mensagem.textContent = mensagemErro

    } else {
        // Se o input for preenchido, mostre uma mensagem de sucesso
        let mensagemSucesso = "Tarefa adicionada com sucesso!"
        mensagem.textContent = mensagemSucesso

         //Cria novo item (li) e insere na (lista ul)
        const listaTarefas = document.getElementById("listaTarefas")
        let novaTarefa = document.createElement("li")
        novaTarefa.textContent = tarefa
        listaTarefas.appendChild(novaTarefa)
    }

    //Limpa o input
    inputTarefa.value = ""


}


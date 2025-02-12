function adicionarTarefa() {
    //let mensagem = "Tarefa adicionada com sucesso!";

    //pega o valor do input da tarefa
    let inputTarefa = document.getElementById("inputTarefa")    
    let tarefa = inputTarefa.value
    
    //adiciona a tarefa (valor do inputTarefa) ao paragrafo mensagem
    document.getElementById("mensagem").textContent = tarefa;
    
    //Acesso á lista (ul) no HTML
    let listaTarefas = document.getElementById("listaTarefas")
    
    //Cria um tópico á lista (li) no HTML
    let novaTarefa = document.createElement("li")

    //Adiciona a tarefa (valor do inputTarefa) ao tópico (li)
    novaTarefa.textContent = tarefa

    //Adiciona o tópico "li" (Elemento filho/ novaTarefa) na lista "ul" (Elemento pai/ listaTarefas)
    listaTarefas.appendChild(novaTarefa)

    //Limpa o input
    inputTarefa.value = ""
}
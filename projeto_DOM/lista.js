(() => {
    const criartarefa = (evento) => {
        evento.preventDefault()
        const lista = document.querySelector('[data-list]')
        const input = document.querySelector('[data-form-input]')
        const valor = input.value
        const tarefa = document.createElement('li')
        tarefa.classList.add('task')
        const conteudo = `<p class="content">${valor}</p>`
        tarefa.innerHTML = conteudo
        tarefa.appendChild(BotaoConcluir())
        tarefa.appendChild(BotaoDeleta())
        lista.appendChild(tarefa)
        input.value = " "

    }


    const notaTarefa = document.querySelector('[data-form-button]')
    notaTarefa.addEventListener('click', criartarefa)
    
    
    const BotaoConcluir = () => {
        const botaoConcluir = document.createElement('button')
        botaoConcluir.classList.add('check-button')
        botaoConcluir.innerHTML = 'concluir'
        botaoConcluir.addEventListener('click', concluirTarefa)
        return botaoConcluir

    }


    const concluirTarefa = (evento) => {
        const botaoConclui = evento.target
        const tarefaCompleta = botaoConclui.parentElement
        tarefaCompleta.classList.toggle('done')


    }

    const BotaoDeleta = () => {
        const botaoDeleta = document.createElement('button')
        botaoDeleta.innerHTML = 'Deletar'
        botaoDeleta.addEventListener('click', deltarTarefa)
        return botaoDeleta

    }


    const deltarTarefa = (evento) => {
        const botaoDeleta = evento.target
        const tarefaCompleta = botaoDeleta.parentElement
        tarefaCompleta.remove()
        return botaoDeleta
    }

})()
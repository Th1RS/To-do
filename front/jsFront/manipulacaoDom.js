const bttnE = document.querySelector("#enviarBttn");
console.log(bttnE)

const inputText = document.querySelector("#Text");
console.log(inputText)

const exibir = document.querySelector("#elements")
console.log(exibir)

let valor = 0;

bttnE.addEventListener('click', function(){
    if(inputText.value == ""){
        window.alert("Digite uma tarefa valida")
    }else{
        const TextoDigitado = inputText.value;
        valor +=1;
        console.log(TextoDigitado);
        let tarefa = `
        <div class="tarefas bordaPadrao">
            <p class="tarefasText bordaPadrao" id="${valor}"> ${TextoDigitado}</p><button  class="espacoLateral botaoEstilo bordaPadrao btn-deletar estiloBotaoFechar">X</button>
        </div>
        `;        
        exibir.innerHTML += tarefa;
        const ultimaTarefaInserida = exibir.lastElementChild;
        const bttnDeletar = ultimaTarefaInserida.querySelector('.btn-deletar')
        bttnDeletar.addEventListener('click',(e)=>{
            const elementoPai = e.target.closest('.tarefas');
            elementoPai.remove();
        });
        console.log(tarefa)
        console.log(exibir)
        inputText.value = ""
    }
})

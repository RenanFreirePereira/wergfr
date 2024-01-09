start = window.document.getElementById("botaoStart")
start.addEventListener("click", () => {
    irParaQuestao()
})

function irParaQuestao() {
    let telaBoaVinda =  window.document.getElementById("boasVindas")
    telaBoaVinda.style.display = "none"
    let telaQuestoes = window.document.getElementById("questoes")
    telaQuestoes.style.display = "flex"
}

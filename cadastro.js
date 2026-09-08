let cadastroSenha = document.querySelector("#inputSenha")
let senhaConfirme = document.querySelector("#confirmeSenha")
let cadastroMail = document.querySelector("#inputMail")
let primeiroNome = document.querySelector("#primeiroNome")
let ultimoNome = document.querySelector("#ultimoNome")
let cadastrarButton = document.querySelector("#cadastrarButton")

cadastrarButton.addEventListener("click", function () {

    if (cadastroSenha.value === "" || senhaConfirme.value === "" || cadastroMail.value === "" || primeiroNome.value === "" || ultimoNome.value === "") {
    alert("Preencha todas as informações!")
    return
}

    if (cadastroSenha.value === senhaConfirme.value) {
        let inputSenha = localStorage.setItem("senhaSalva", cadastroSenha.value)
        let inputNome = localStorage.setItem("nomeSalvo", primeiroNome.value)
        let inputUltimoNome = localStorage.setItem("ultimoNomeSalvo", ultimoNome.value)
        let inputEmail = localStorage.setItem("emailSalvo", cadastroMail.value)
        alert("Conta criada com sucesso!")
        window.location.href = "login.html"
        console.log(cadastroSenha.value)
    } else {
        console.log("Ops.. algo deu errado")
    }

})

let loginMail = document.querySelector("#email")
let loginSenha = document.querySelector("#senha")
let loginButton = document.querySelector("#loginButton")

loginButton.addEventListener("click", function() {
    let emailSalvo = localStorage.getItem("emailSalvo")
    let senhaSalva = localStorage.getItem("senhaSalva")

    if (loginMail.value === emailSalvo && loginSenha.value === senhaSalva) {
        alert("Login efetuado com sucesso!")
        window.location.href = "pagina.html"
    } else {
        alert("As informações não se coincidem!")
    }
})
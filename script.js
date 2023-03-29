const form = document.querySelector('#formLogin')
const nameInput = document.querySelector('#inputName') 
const emailInput = document.querySelector('#inputEmail') 
const senhaInput = document.querySelector('#inputSenha') 

form.addEventListener("submit", (event) => {
    event.preventDefault()
    //verifica se as áreas estejam vazias
    
    if(nameInput.value === "") {
        alert("Preencha o seu nome.")
        return
    }
    //impede que o usuario envie com o campo de nome vazio

    if(emailInput.value === "") {
        alert("Preencha o seu email.")
        return
    }
    //impede que o usuario envie com o campo de email vazio

    if(senhaInput.value === "") {
        alert("Insira sua senha.")
        return
    }
    //impede que o usuario envie com o campo de senha vazio
   
    if(!validarSenha(senhaInput.value, 8)) {
        alert("Senha inválida. A senha precisa ter 8 dígitos")
        return
    }
    //verifica se a senha é válida

    form.submit()
    //se todos estiverem preenchidos, envie o form
})

function validarSenha(password, minDigits) {
    if(password.length >= minDigits) {
        return true
    }
    return false
}
//função que valida a senha
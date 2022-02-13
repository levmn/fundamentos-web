let nome = window.document.getElementById("nome")
let email = document.getElementById("email")
let assunto = document.getElementById("assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")

function envio(){
    if(nome.value != "" && email.value != "" && assunto.value != ""){
        alert("Oi, "+nome.value+". Seu formulário foi enviado!")
    }else{
        alert("É necessário que todos os campos sejam preenchidos!")
    }
}

nome.style.width = '100%';
email.style.width = '100%';
assunto.style.width = '100%';

function validaNome(){
    let txtNome = document.querySelector("#txtNome")
    if(nome.value.length < 3){
       txtNome.innerHTML = "nome inválido."
       txtNome.style.color = "grey"
       txtNome.style.fontSize = "12px"
    }else{
        txtNome.innerHTML = "nome válido."
        txtNome.style.color = "green"
        txtNome.style.fontSize = "12px"
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
       txtEmail.innerHTML = "e-mail inválido."
       txtEmail.style.color = "grey"
       txtEmail.style.fontSize = "12px"

    }else{
        txtEmail.innerHTML = "e-mail válido."
        txtEmail.style.color = "green"
        txtEmail.style.fontSize = "12px"
        emailOk = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto")
    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = "o campo assunto tem o limite de 100 caracteres."
        txtAssunto.style.color = "grey"
        txtAssunto.style.fontSize = "12px"
        txtAssunto.style.display = "block"
        assuntoOk = false
    }else{
        txtAssunto.style.display = "none"
        assuntoOk = true
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert("Oi, "+nome.value+". Seu formulário foi enviado com sucesso!")
    }else{
        alert("Preencha o formulário corretamente antes de enviar...")
    }
}

function mapaZoom(){
    mapa.style.width='410px'
    mapa.style.height='310px'
}

function mapaNormal(){
    mapa.style.width='400px'
    mapa.style.height='300px'
}
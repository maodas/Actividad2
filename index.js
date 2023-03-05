var formulario = document.getElementById('form-login')
var nombre = document.getElementById('nombre-login')
var email = document.getElementById('email-login')
var fecha = document.getAnimations('fecha-nac')
var password = document.getElementById('pass-login')

var expMay = RegExp("[A-Z]")
var expMin = RegExp("[a-z]")
var expNum = RegExp("[0-9]")
var exp

formulario.addEventListener('submit',function(evento){
    evento.preventDefault()
    alert("Bienvenido"+document.getElementById('pass-login').value)
})
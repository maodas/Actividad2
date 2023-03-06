var formulario = document.getElementById('form-login')
var nombre = document.getElementById('nombre-login')
var email = document.getElementById('email-login')
var fecha = document.getAnimations('fecha-nac')
var password = document.getElementById('pass-login')

var expMay = RegExp("[A-Z]")
var expMin = RegExp("[a-z]")
var expNum = RegExp("[0-9]")

formulario.addEventListener('submit',function(evento){
    evento.preventDefault()

    var error=""

    if(!nombre.value.match(expMay)){
        error += "Su Nombre/Usuario debe tener una Mayuscula  "      
    }if(!nombre.value.match(expMin)){
        error += "Su Nombre/Usuario debe tener una Minuscula  "
    }if(!nombre.value.match(expNum)){
        error += "Su Nombre/Usuario debe tener un Numero  "
    }if(!password.value.match(expMay)){
        error += "Su Password debe tener una Mayuscula  "
    }if(!password.value.match(expMin)){
        error += "Su Password debe tener una Mayuscula  "
    }if(!password.value.match(expNum)){
        error += "Su Password debe tener un Numero  "
    }
    

    alert(error)
})




/*formulario.addEventListener('submit',function(evento){
    evento.preventDefault()

    var error=""

        if(!password.value.match(expMay)){
            error += "Su Password debe tener una Mayuscula"
        }else if(!password.value.match(expMin)){
            error += "Su Password debe tener una Mayuscula"
        }else if(!password.value.match(expNum)){
            error += "Su Password debe tener un Numero"
        }
           
        alert(error)
    })*/
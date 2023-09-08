let emailbox = document.getElementById("user-email")
let pass = document.getElementById("user-pass")
let emailValid = false
let passValid = false


function validator(){
   
    if(!emailbox.value){
        document.getElementById('email-Error').innerHTML="please enter your email !"
        emailValid=false
    }
    else{
        document.getElementById('email-Error').innerHTML=""
        emailValid=true
    }

    if(!pass.value){
        document.getElementById('pass-Error').innerHTML="please enter your password !"
        passValid = false
    }
    else{
        document.getElementById('pass-Error').innerHTML=""
        passValid = true
    }
    if(!emailValid || !passValid){
        return false
    }
    else{
        return true
    }

}
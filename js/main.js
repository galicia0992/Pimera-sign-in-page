let btn = document.getElementById("butt")
let fne = document.getElementById("fne")
let lne = document.getElementById("lne")
let eme = document.getElementById("eme")
let pwe = document.getElementById("pwe")
btn.addEventListener("click", reg)


function reg(){
let namer = document.getElementById("nam").value
let lName = document.getElementById("lnam").value
let email= document.getElementById("mail").value
let pass = document.getElementById("pword").value
let expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;

if (namer.length == 0 || /^\s+$/.test(namer)){
    document.getElementById("nam").className = "error";
    fne.classList.remove("d-none")
}else{
    document.getElementById("nam").className = "correct";
    fne.classList.add("d-none")
}
if(lName.length == 0 || /^\s+$/.test(lName)){
    document.getElementById("lnam").className = "error";
    lne.classList.remove("d-none")
}else{
    document.getElementById("lnam").className = "correct";
    lne.classList.add("d-none")
}
if(email.length == 0 || /^\s+$/.test(email) || !expresion.test(email)){
    document.getElementById("mail").className = "error";
    eme.classList.remove("d-none")
}else{
    document.getElementById("mail").className = "correct";
    eme.classList.add("d-none")
}
if(pass.length == 0 || /^\s+$/.test(pass)){
    document.getElementById("pword").className = "error";
    pwe.classList.remove("d-none")
}else{
    document.getElementById("pword").className = "correct";
    pwe.classList.add("d-none")
}
}




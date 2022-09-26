function validation(){
    let form = document.getElementById("form");
    let email = document.getElementById("email").value;
    let error = document.getElementById("error");
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let div = document.getElementById("dinput");
    let att = document.getElementById("att");

    if(email.match(pattern)){
        form.classList.add("valid");
        form.classList.remove("invalid");
        div.style.border = "0.125rem solid #ce9797";
        att.style.visibility = "hidden";
        error.innerHTML = "We will send you email"
        error.style.color = "#413a3a";
    }else{
        form.classList.remove("valid");
        form.classList.add("invalid");
        div.style.border = "0.125rem solid #f96262";
        att.style.visibility = "visible";
        error.innerHTML = "Please provide a valid email"
        error.style.color = "#f96262";
    }
    if (email == ""){
        form.classList.remove("valid");
        form.classList.remove("invalid");
        div.style.border = "0.125rem solid #f96262";
        att.style.visibility = "visible";
        error.innerHTML = "Please provide email"
        error.style.color = "#f96262";
    }
    return false;
}
const email = document.getElementById("email");
const pass = document.getElementById("pass");
const loginBtn = document.getElementById("submit");

loginBtn.addEventListener("mouseover",(button)=>{
    let emailInp = email.value;
    let passInp = pass.value;
    if(passInp === "" || emailInp === ""){
        button.target.classList.toggle("move");
        loginBtn.style.background = "red";
    }
    else{
        button.target.classList.toggle("stop");
        loginBtn.style.background = "green";
    }
})
const nameInp = document.getElementById("name");
const pass = document.getElementById("pass");
const loginBtn = document.getElementById("submit");

loginBtn.addEventListener("mouseover",(button)=>{
    let nameInput = nameInp.value;
    let passInp = pass.value;
    if(passInp === "" || nameInput === ""){
        button.target.classList.toggle("move");
        loginBtn.style.background = "red";
    }
    else{
        button.target.classList.toggle("stop");
        loginBtn.style.background = "green";
    }
})


loginBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    alert(`ThankYou ${nameInp.value} for testing`);
})
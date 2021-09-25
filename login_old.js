let inputTag = document.getElementsByTagName("input");
let buttonArray = document.getElementsByTagName("button");

let inputId = inputTag[0];
let inputPassword = inputTag[1];

let ordinaryButton = buttonArray[0];
let facebookLoginButton = buttonArray[1];

// inputPassword.addEventListener("keyup", () => {
//     if(inputId.value){
//         ordinaryButton.classList.remove("unactivatedLoginColor");
//         ordinaryButton.classList.add("activatedLoginColor");
//     }
//     if(!inputPassword.value){
//         ordinaryButton.classList.remove("activatedLoginColor");
//         ordinaryButton.classList.add("unactivatedLoginColor");
//     }
// })

ordinaryButton.addEventListener('click', () => {
    if(inputId.value === "aaa" && inputPassword.value === "111"){
        alert("로그인 성공");
        window.location = "https://yhddream.github.io/proj001/index.html";
    } else {
        alert("로그인 실패");
    }
})

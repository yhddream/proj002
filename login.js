let inputTag = document.getElementsByTagName("input");
let buttonArray = document.getElementsByTagName("button");

let inputId = inputTag[0];
let inputPassword = inputTag[1];

let ordinaryButton = buttonArray[0];
let facebookLoginButton = buttonArray[1];
let instagramLoginButton = buttonArray[2];

ordinaryButton.addEventListener('click', () => {
    if(inputId.value === "aaa" && inputPassword.value === "111"){
        alert("로그인 성공");
        window.location = "https://yhddream.github.io/proj001/index.html";
    } else {
        alert("로그인 실패");
    }
})

facebookLoginButton.addEventListener('click', () => {
  alert("대체 로그인 준비중입니다. 아직 로그인 되지는 않습니다.");
})

instagramLoginButton.addEventListener('click', () => {
  alert("대체 로그인 준비중입니다. 아직 로그인 되지는 않습니다.");
})

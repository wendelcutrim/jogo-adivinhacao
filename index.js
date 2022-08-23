console.log("Start JS");

const btnTry = document.querySelector(".screen1 form > button");
const btnReset = document.querySelector(".screen2 form > button");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

const randomNumber = Math.round(Math.random() * 10);
console.log(randomNumber)

let xAttempts = 1;

btnTry.addEventListener("click", handleTryClick);

btnReset.addEventListener("click", handleResetClick);

function handleTryClick(event) {
    event.preventDefault();

    const inputNumber = document.querySelector("#inputNumber");

    if(Number(inputNumber.value) == randomNumber) {
        toggleScreen();
        document.querySelector(".screen2 h2").innerText = `Acertou em ${xAttempts} tentativas`
    }

    inputNumber.value = "";
    xAttempts++;
}

function toggleScreen(){
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
}

function handleResetClick() {
    toggleScreen();
    xAttempts = 1;
}
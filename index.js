console.log("Start JS");

const randomNumber = Math.round(Math.random() * 10);
console.log(randomNumber)

let xAttempts = 1;
console.log(xAttempts);


const btnTry = document.querySelector(".screen1 form > button");
const btnReset = document.querySelector(".screen2 form > button");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2")

function handleTryClick(event) {
    event.preventDefault();

    const inputNumber = document.querySelector("#inputNumber");

    if(Number(inputNumber.value) == randomNumber) {
        console.log(inputNumber.value);
        screen1.classList.add("hide");
        screen2.classList.remove("hide");

        document.querySelector(".screen2 h2").innerText = `Acertou em ${xAttempts} tentativas`
    }

    inputNumber.value = "";
    xAttempts++;

}


btnTry.addEventListener("click", handleTryClick);

btnReset.addEventListener("click",function() {
    screen1.classList.remove("hide");
    screen1.classList.add("hide");
    xAttempts = 1;
})
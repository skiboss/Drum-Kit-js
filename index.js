let numberOfDrums = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        this.style.color = "white";
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
})};



// Higher Order Function Calculator
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function mod(num1, num2) {
    return num1 % num2;
}

function calculator(num1, num2, operator) {
    return operator(num1, num2);
}
let numberOfDrums = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        var buttonInnerHTML = this.innerHTML;
        switch (buttonInnerHTML) {
            case "w":
                var audio1 = new Audio("sounds/kick-bass.mp3")
                audio1.play();
                break;

            case "a":
                var audio2 = new Audio("sounds/crash.mp3")
                audio2.play();
                break;

            case "s":
                var audio3 = new Audio("sounds/tom-1.mp3")
                audio3.play();
                break;

            case "d":
                var audio4 = new Audio("sounds/tom-2.mp3")
                audio4.play();

            case "j":
                var audio5 = new Audio("sounds/snare.mp3")
                audio5.play();
                break;

            case "k":
                var audio6 = new Audio("sounds/tom-3.mp3")
                audio6.play();
                break;

            case "l":
                var audio7 = new Audio("sounds/tom-4.mp3")
                audio7.play();
                break;

            default: console.log(buttonInnerHTML);
                break;

        }

        document.addEventListener("keydown", function() {
            alert("Key was Pressed!")
        })
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
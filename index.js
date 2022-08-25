// detecting click
let numberOfDrums = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    })
};
// detecting buttonPress
document.addEventListener("keydown", function(event) {

    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            var kickbass = new Audio("sounds/kick-bass.mp3")
            kickbass.play();
            break;

        case "a":
            var crash = new Audio("sounds/crash.mp3")
            crash.play();
            break;

        case "s":
            var tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play();
            break;

        case "d":
            var tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play();

        case "j":
            var snare = new Audio("sounds/snare.mp3")
            snare.play();
            break;

        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play();
            break;

        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play();
            break;

        default: console.log(buttonInnerHTML);
            break;
    }

};

function buttonAnimation(currentKey) {
    let activeKey = document.querySelector("." + currentKey);
    activeKey.classList.add("pressed");

    setTimeout(function() {
        activeKey.classList.remove("pressed");
    }, 200);
    
};


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
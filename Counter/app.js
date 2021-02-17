const number = document.querySelector(".num");
const decreaseBtn = document.getElementById("minus-button");
const increaseBtn = document.getElementById("add-button");
const resetBtn = document.getElementById("reset-button");
let n = 0;

//functions
function addNumber() {
    n++;
    return number.textContent = n;
}

function minusNumber() {
    n--;
    return number.textContent = n;
}

function resetNumber() {
    n = 0;
    return number.textContent = n;
}

function updateColor() {
    if (n > 0) {
        number.style.color = "#06d6a0";
    } else if (n < 0) {
        number.style.color = "#ef476f";
    } else{
        number.style.color = "black";
    }
}

//events
increaseBtn.addEventListener("click", function () {
    addNumber();
    updateColor();
});

decreaseBtn.addEventListener("click", function () {
    minusNumber();
    updateColor();
});
resetBtn.addEventListener("click", function () {
    resetNumber();
    updateColor();
});
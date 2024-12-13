document.body.style.background = "darkgray";

const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clearButton = document.getElementById("clear");
const equals = document.getElementById("equals");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const value = btn.getAttribute("data-value");
        display.value += value;
    });
});

clearButton.addEventListener("click", () => {
    display.value="";
})

equalsButton.addEventListener("click", ()=> {
    display.value = eval(display.value);
})
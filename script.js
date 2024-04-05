let display = document.querySelector("#display");
let buttons = document.querySelectorAll("button");
let buttonArray = Array.from(buttons);
let string = "";
let history = [];

buttonArray.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        if (event.target.innerHTML == "DEL") {
            string = string.substring(0, string.length - 1);
            display.value = string;
        } else if (event.target.innerHTML == "AC") {
            string = "";
            display.value = string;
        } else if (event.target.innerHTML == "=") {
            let result = eval(string);
            string += " = " + result;
            history.push(string);
            display.value = result;
        } else if (event.target.innerHTML == "Show History") {
            display.value = history.join("\n");
        } else if (event.target.innerHTML == "√") {
            string = "Math.sqrt(" + string + ")";
            display.value = string;
        } else if (event.target.innerHTML == "x²") {
            string = "(" + string + ") * (" + string + ")";
            display.value = string;
        } else if (event.target.id == "dot") {
            if (!string.includes(".")) {
                string += ".";
                display.value = string;
            }
        } else {
            string += event.target.innerHTML;
            display.value = string;
        }
    });
});

document.querySelector("#clear-history").addEventListener("click", () => {
    history = [];
});
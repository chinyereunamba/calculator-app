const body = document.getElementsByTagName("body");
const numberBtn = document.querySelectorAll("button.number");
const operation = document.querySelectorAll("button.action");
const screen = document.querySelector(".screen input");
const del = document.getElementById("del");
const reset = document.getElementById("reset");
const equal = document.getElementById("equal");

numberBtn.forEach((el) => {
    el.addEventListener("click", () => {
        if (screen.value == "0") {
            screen.value = "";
        }
        screen.value += el.textContent;
    });
});

del.addEventListener("click", () => {
    if (screen.value == "Invalid Input") {
        screen.value = '0'
    } else {
        value = screen.value;
        screen.value = value.substring(0, value.length - 1);
    }
    
});

reset.addEventListener("click", () => {
    screen.value = 0;
});

equal.addEventListener("click", () => {
    var exp = screen.value;
    try {
        if (exp) {
            screen.value = eval(exp);
        }
        console.log(screen.value);
    } catch (error) {
        screen.value = "Invalid Input"
    }
});

operation.forEach((el) => {
    el.addEventListener("click", () => {
        if (el.textContent == `×`) {
            screen.value += "*";
        } else {
            screen.value += el.textContent;
        }
    });
});

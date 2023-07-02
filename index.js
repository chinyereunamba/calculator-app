const body = document.getElementsByTagName("body");
const numberBtn = document.querySelectorAll("button.number");
const operation = document.querySelectorAll("button.action");
const screen = document.querySelector(".screen input");
const del = document.getElementById("del");
const reset = document.getElementById("reset");
const equal = document.getElementById("equal");
const scrollSec = document.querySelectorAll(".scroll-sec input");
const toggle = document.querySelector(".btn");

numberBtn.forEach((el) => {
    el.addEventListener("click", () => {
        if (screen.value == "0") {
            screen.value = "";
        }
        screen.value += el.textContent;
    });
});

del.addEventListener("click", () => {
    if (screen.value == "Invalid Input" || screen.value == "Infinity") {
        screen.value = "0";
    } else if (screen.value == "0") {
        screen.value = "0";
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
    } catch (error) {
        screen.value = "Invalid Input";
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

scrollSec.forEach((el) => {
    el.addEventListener("click", () => {});
});

scrollSec.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.id == "one") {
            setTheme("default");
            toggle.style = `left: 5px`;
        } else if (btn.id == "two") {
            setTheme("light");
            toggle.style = `left: 25px`;
        } else {
            setTheme("dark");
            toggle.style = `left: 45px`;
        }
    });
});

let theme = localStorage.getItem("theme");

let trackPos = 5 // track ball position
themeOption = ['default', 'light', 'dark']

for (let i = 0; i < themeOption.length; i++){

    trackPos = 20 * i + 5

    if (theme == themeOption[i]) {
        toggle.style = `left: ${trackPos}px`
    }
}

if (theme == null) {
    setTheme("default");
} else {
    setTheme(theme);
}

function setTheme(mode) {
    if (mode == "default") {
        document.getElementById("theme-style").href = "/style.css";
    }
    if (mode == "light") {
        document.getElementById("theme-style").href = "/lightTheme.css";
    }
    if (mode == "dark") {
        document.getElementById("theme-style").href = "/darkTheme.css";
    }

    localStorage.setItem("theme", mode);
}

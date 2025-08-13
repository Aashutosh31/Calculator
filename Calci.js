const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const themeToggle = document.getElementById("themeToggle");
const body = document.getElementById("body");

let currentTheme = "dark";
let expression = "";

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (value === "AC") {
      expression = "";
    } else if (value === "=") {
      try {
        expression = eval(expression).toString();
      } catch {
        expression = "Error";
      }
    } else if (value === "C") {
      if (expression) {
        expression = expression.slice(0,-1).toString();
      }
    } else {
      expression += value;
    }

    display.value = expression;
  });
});

// Keyboard support
document.addEventListener("keydown", (e) => {
  if ((e.key >= "0" && e.key <= "9") || ["+", "-", "*", "/", ".", "%"].includes(e.key)) {
    expression += e.key;
  } else if (e.key === "Enter") {
    try {
      expression = eval(expression).toString();
    } catch {
      expression = "Error";
    }
  } else if (e.key === "Backspace") {
    expression = expression.slice(0, -1);
  }
  display.value = expression;
});

// Theme toggle
themeToggle.addEventListener("click", () => {
  if (currentTheme === "dark") {
    body.classList.add("light-theme");
    currentTheme = "light";
    themeToggle.textContent = "☀️";
  } else {
    body.classList.remove("light-theme");
    currentTheme = "dark";
    themeToggle.textContent = "🌙";
  }
});




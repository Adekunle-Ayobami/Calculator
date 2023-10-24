let output = "0";

function updateOutput() {
  document.getElementById("result").textContent = output;
}

function appendToOutput(value) {
  if (output === "0" || output === "Error") {
    output = value;
  } else {
    output += value;
  }
  updateOutput();
}

function removeToOutput(value) {
  if (output === "Error") return;
  output = output.slice(0, -value.length);
  if (output === "") {
    output = "0";
  }
  updateOutput();
}

function clearOutput() {
  output = "0";
  updateOutput();
}

function clearEntry() {
  if (output === "Error") return;
  output = output.slice(0, -1);
  if (output === "") {
    output = "0";
  }
  updateOutput();
}

function calculate() {
  try {
    output = eval(output);
    if (output === undefined) {
      output = "Error";
    }
  } catch (error) {
    output = "Error";
  }
  updateOutput();
}

function calculateSquareRoot() {
  try {
    output = Math.sqrt(parseFloat(output));
  } catch (error) {
    output = "Error";
  }
  updateOutput();
}

function calculatePercentage() {
  try {
    output = eval(output) / 100;
  } catch (error) {
    output = "Error";
  }
  updateOutput();
}

// Add event listener to capture keyboard input
window.addEventListener("keydown", function (event) {
  const key = event.key;

  if (!isNaN(key) || key === "." || key === "+") {
    appendToOutput(key);
  } else if (key === "-" || key === "*" || key === "/") {
    appendToOutput(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    clearEntry();
  }
});

updateOutput();

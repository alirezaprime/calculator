let outputScreen = document.getElementById("output-screen");

function display(num) {
  outputScreen.value += num;
}

function Calculate() {
  try {
    outputScreen.value = eval(outputScreen.value);
  } catch {
    alert("invalid");
  }
}
function Clear(){
    outputScreen.value = "";
}
function Delet(){
    outputScreen.value = outputScreen.value.slice(0,-1);
}
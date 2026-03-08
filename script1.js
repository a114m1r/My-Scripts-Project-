function runApp() {
  const message = getMessage();
  const result = processMessage(message);
  document.getElementById("output").textContent = result;
}

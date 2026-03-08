function runApp() {
  const message = getMessage();
  const result = processMessage(message);
  document.getElementById("output").textContent = result;
}
function runApp() {
  console.log("runApp started");
  const message = getMessage();
  console.log("message:", message);
  const result = processMessage(message);
  console.log("result:", result);
  document.getElementById("output").textContent = result;
}

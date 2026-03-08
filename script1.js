function runApp() {
  const studentInput = document.getElementById("studentInput").value;
  const taskType = document.getElementById("taskType").value;

  console.log("Input:", studentInput);
  console.log("Task:", taskType);

  const result = processStudentTask(studentInput, taskType);

  console.log("Result:", result);

  document.getElementById("output").textContent = result;
}

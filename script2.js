function processStudentTask(input, task) {
  const text = cleanText(input);

  if (!text) {
    return "Please type a question first.";
  }

  if (task === "explain") {
    return formatOutput(
      "Explanation",
      `Here is a simple explanation of your topic: ${text}. This topic can be understood by breaking it into smaller parts and reviewing the main idea step by step.`
    );
  }

  if (task === "summarize") {
    return formatOutput(
      "Summary",
      `Summary: ${text}. The main point is to understand the key idea, focus on the important terms, and remember the big picture.`
    );
  }

  if (task === "quiz") {
    return formatOutput(
      "Quiz",
      `1. What is the main idea of "${text}"? 2. Why is it important? 3. Can you explain it in your own words?`
    );
  }

  return "Invalid task selected.";
}


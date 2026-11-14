// Intentional issues for a SonarQube classroom demonstration.

// Example 1: Unused local variable
export function calculateTotal(price, quantity) {
  const discount = 10;

  return price * quantity;
}

// Example 2: Same expression on both sides of a comparison
export function isScoreValid(score) {
  if (score === score) {
    return true;
  }

  return false;
}

// Example 3: Both branches return the same value
export function getShippingMessage(isExpress) {
  if (isExpress) {
    return 'Your order is being prepared';
  } else {
    return 'Your order is being prepared';
  }
}

// Intentional duplication for a SonarQube demonstration.

export function calculateStudentOneReport(student) {
  const quiz1 = student.quiz1;
  const quiz2 = student.quiz2;
  const quiz3 = student.quiz3;
  const assignment1 = student.assignment1;
  const assignment2 = student.assignment2;
  const project = student.project;
  const exam = student.exam;

  const quizTotal = quiz1 + quiz2 + quiz3;
  const quizAverage = quizTotal / 3;

  const assignmentTotal = assignment1 + assignment2;
  const assignmentAverage = assignmentTotal / 2;

  const quizScore = quizAverage * 0.20;
  const assignmentScore = assignmentAverage * 0.20;
  const projectScore = project * 0.25;
  const examScore = exam * 0.35;

  const finalScore =
    quizScore +
    assignmentScore +
    projectScore +
    examScore;

  const roundedScore = Math.round(finalScore);
  const passed = roundedScore >= 75;

  return {
    quizAverage: quizAverage,
    assignmentAverage: assignmentAverage,
    projectScore: projectScore,
    examScore: examScore,
    finalScore: roundedScore,
    passed: passed,
  };
}

export function calculateStudentTwoReport(student) {
  const quiz1 = student.quiz1;
  const quiz2 = student.quiz2;
  const quiz3 = student.quiz3;
  const assignment1 = student.assignment1;
  const assignment2 = student.assignment2;
  const project = student.project;
  const exam = student.exam;

  const quizTotal = quiz1 + quiz2 + quiz3;
  const quizAverage = quizTotal / 3;

  const assignmentTotal = assignment1 + assignment2;
  const assignmentAverage = assignmentTotal / 2;

  const quizScore = quizAverage * 0.20;
  const assignmentScore = assignmentAverage * 0.20;
  const projectScore = project * 0.25;
  const examScore = exam * 0.35;

  const finalScore =
    quizScore +
    assignmentScore +
    projectScore +
    examScore;

  const roundedScore = Math.round(finalScore);
  const passed = roundedScore >= 75;

  return {
    quizAverage: quizAverage,
    assignmentAverage: assignmentAverage,
    projectScore: projectScore,
    examScore: examScore,
    finalScore: roundedScore,
    passed: passed,
  };
}
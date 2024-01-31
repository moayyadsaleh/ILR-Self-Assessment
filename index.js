let currentQuestion = 1;
let totalQuestions = 30; // Update the total number of questions
let userAnswers = [];

function nextQuestion() {
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');

  if (selectedAnswer) {
    userAnswers.push(parseInt(selectedAnswer.value));
    if (currentQuestion < totalQuestions) {
      currentQuestion++;
      displayQuestion();
    } else {
      showResult();
    }
  } else {
    alert("Please select an answer before moving on.");
  }
}

function displayQuestion() {
  const questionElement = document.getElementById("question");
  questionElement.textContent = `Question ${currentQuestion}: ${getQuestionText(
    currentQuestion
  )}`;

  // Clear previous selected answer
  document.querySelector('input[name="answer"]:checked').checked = false;
}

function getQuestionText(questionNumber) {
  switch (questionNumber) {
    case 2:
      return "Can you satisfy immediate needs using rehearsed utterances?";
    case 3:
      return "Are you able to communicate even basic needs through spoken language?";
    case 4:
      return "Are you able to engage in simple face-to-face conversations on familiar topics?";
    case 5:
      return "Can you handle routine social interactions with some difficulty?";
    case 6:
      return "Can you introduce yourself and provide basic personal information?";
    case 7:
      return "Can you initiate and maintain predictable face-to-face conversations?";
    case 8:
      return "Can you satisfy limited social demands using the language?";
    case 9:
      return "Do you have some understanding of social conventions in conversation?";
    case 10:
      return "Can you satisfy routine social demands and limited work requirements?";
    case 11:
      return "Can you handle work-related interactions within a limited scope?";
    case 12:
      return "Can you participate in normal, high-frequency social conversational situations?";
    case 13:
      return "Can you satisfy most work requirements effectively using the language?";
    case 14:
      return "Do you demonstrate considerable ability to communicate on specific topics?";
    case 15:
      return "Are you generally fluent but may experience difficulty under pressure?";
    case 16:
      return "Can you participate effectively in most formal and informal conversations?";
    case 17:
      return "Do you use the language acceptably, with minor imperfections?";
    case 18:
      return "Are you able to convey meaning accurately, even with noticeable imperfections?";
    case 19:
      return "Can you satisfy professional needs in a wide range of sophisticated tasks?";
    case 20:
      return "Do you exhibit strength in fluency, lexicon breadth, and structural precision?";
    case 21:
      return "Are you capable of handling professional duties, such as briefings and discussions?";
    case 22:
      return "Despite obvious strengths, do you exhibit some hesitancy, uncertainty, effort, or errors?";
    case 23:
      return "Do you have particular strength in fluency and one or more of the following: lexicon breadth, structural precision?";
    case 24:
      return "Is there occasional patterned errors in low frequency and highly-complex structures?";
    case 25:
      return "Are you often able to use the language to satisfy professional needs in sophisticated tasks?";
    case 26:
      return "Is there occasional hesitancy, uncertainty, effort, or errors?";
    case 27:
      return "Do you exhibit strength in fluency and one or more, but not all, of the following: breadth of lexicon, structural precision?";
    case 28:
      return "Are there occasional patterned errors in low frequency and highly-complex structures?";
    case 29:
      return "Can you use the language to satisfy professional needs in a wide range of sophisticated and demanding tasks?";
    case 30:
      return "Do you often exhibit some hesitancy, uncertainty, effort, or errors in language use?";
    default:
      return "[Next Question Text Here]";
  }
}

function showResult() {
  const totalScore = userAnswers.reduce((acc, answer) => acc + answer, 0);
  const averageScore = totalScore / totalQuestions;

  let proficiencyLevel;

  if (averageScore < 1) {
    proficiencyLevel = "No Proficiency";
  } else if (averageScore < 2) {
    proficiencyLevel = "Elementary Proficiency";
  } else if (averageScore < 3) {
    proficiencyLevel = "Limited Working Proficiency";
  } else if (averageScore < 4) {
    proficiencyLevel = "Professional Working Proficiency";
  } else if (averageScore < 5) {
    proficiencyLevel = "Full Professional Proficiency";
  } else {
    proficiencyLevel = "Native or Bilingual Proficiency";
  }

  const resultContainer = document.getElementById("result-container");
  resultContainer.innerHTML = `<p>Your language proficiency level is: ${proficiencyLevel}</p>`;
}

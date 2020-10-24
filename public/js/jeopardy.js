// $(document).ready(function () {

//     // Will need to update with the correct form name and input id when gameboard is complete:
//     var answerForm = $("form.answer");
//     var answerInput = $("input#answer-input");
//     var questionId = $("#answer-input").attr("question-id")
//     var gameScore = 0
//     var questionsRemaining = 30
  
//     answerForm.on("submit", function (event) {
//       event.preventDefault();
//       var userAnswer = answerInput.val().trim(),
  
//       if (!userAnswer) {
//         return;
//       };
//       questionsRemaining = questionsRemaining--;
//       $(this).parent
//       checkAnswer(userAnswer, questionsRemaining);
//       answerInput.val("");
//     });
  
//     function checkAnswer(userAnswer, questionsRemaining) {
//       $.get("/api/" + questionId, function (data) {
//         console.log(data);
//         correctAnswer = data.answer;
  
//         if (correctAnswer == userAnswer) {
//           gameScore = gameScore + data.value;
//           positionChecker(questionsRemaining)
//           // Need to add an indication that the user got the answer right here
//         }
//         // Need to add an indication that the user got the answer wrong here
//         gameScore = gameScore - data.value;
//       });
//     };

//     function positionChecker(questionsRemaining) {
//         if (questionsRemaining < 1) {
//             endGame();
//         }
//         renderJeopardyBoard();
//     }

//     // To do: need to add an end game proceedure and define our render board function to fill out the screen
//   });      
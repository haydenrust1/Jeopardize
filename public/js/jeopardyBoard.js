$(document).ready(function () {

  $("#answer1-100").on("click", function(event) {
    event.preventDefault();
    let answer = $("#answer1").val().trim();
    if (answer === "Princess Diana") {
      $("#correct").removeClass("hide");
      $("#col1-100").addClass("hide");
    } else {
      $("#try-again").removeClass("hide");
      setTimeout(function() { window.location.reload(); } , 2000);
    };
  });

    // Will need to update with the correct form name and input id when gameboard is complete:
    // var answerForm = $("form.answer");
    // var answerInput = $("input#answer-input");
    // var questionId = $("#answer-input").attr("question-id");
    // var gameScore = 0
    // var questionsRemaining = 30
  
    // answerForm.on("submit", function (event) {
    //   event.preventDefault();
    //   var userAnswer = answerInput.val().trim(),
  
    //   if (!userAnswer) {
    //     return;
    //   };
    //   questionsRemaining = questionsRemaining--;
    //   $(this).parent
    //   checkAnswer(userAnswer, questionsRemaining);
    //   answerInput.val("");
    // });
  
    // function checkAnswer(userAnswer, questionsRemaining) {
    //   $.get("/api/questions/" + questionId, function (data) {
    //     console.log(data);
    //     correctAnswer = data.answer;
  
    //     if (correctAnswer == userAnswer) {
    //       gameScore = gameScore + data.value;
    //       positionChecker(questionsRemaining)
    //       // Need to add an indication that the user got the answer right here
    //     }
    //     // Need to add an indication that the user got the answer wrong here
    //     gameScore = gameScore - data.value;
    //   });
    // };

    // function positionChecker(questionsRemaining) {
    //     if (questionsRemaining < 1) {
    //         endGame();
    //     }
    //     renderJeopardyBoard();
    // }

    // $(".logout-btn").on("click", function(event) {
    //   event.preventDefault();
    //   window.location.replace("login");
    // });

    // To do: need to add an end game proceedure and define our render board function to fill out the screen
  });      
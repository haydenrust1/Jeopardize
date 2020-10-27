$(document).ready(function () {
  var questionObj;


  // first category
  $("#firstCat100").on("click", function (event) {
    event.preventDefault();
    console.log("click");
    questionObj = {
      "category": "HISTORY",
      "value": 100,
      "question": "For the last 8 years of his life, Galileo was under house arrest for espousing this man's theory",
      "answer": "Who is Copernicus?"
    };
    $(".jumbotron").text(questionObj.question)
    $(this).text("");
  });
  $("#firstCat200").on("click", function (event) {
    event.preventDefault();
    console.log("click");
    questionObj = {
      "category": "HISTORY",
      "value": 200,
      "question": "Built in 312 B.C. to link Rome & the South of Italy, it's still in use today",
      "answer": "What is the Appian Way?"
    };
    $(".jumbotron").text(questionObj.question)
    $(this).text("");
  });
  $("#firstCat300").on("click", function (event) {
    event.preventDefault();
    console.log("click");
    questionObj = {
      "category": "HISTORY",
      "value": 300,
      "question": "In 1000 Rajaraja I of the Cholas battled to take this Indian Ocean island now known for its tea",
      "answer": "What is Ceylon?"
    };
    $(".jumbotron").text(questionObj.question)
    $(this).text("");
  });
  $("#firstCat400").on("click", function (event) {
    event.preventDefault();
    console.log("click");
    questionObj = {
      "category": "HISTORY",
      "value": 400,
      "question": "Karl led the first of these Marxist organizational efforts; the second one began in 1889",
      "answer": "What is the International?"
    };
    $(".jumbotron").text(questionObj.question)
    $(this).text("");
  });
  $("#firstCat500").on("click", function (event) {
    event.preventDefault();
    console.log("click");
    questionObj = {
      "category": "HISTORY",
      "value": 500,
      "question": "This Asian political party was founded in 1885 with Indian National as part of its name",
      "answer": "What is the Congress Party?"
    };
    $(".jumbotron").text(questionObj.question)
    $(this).text("");
  });

  // second category
  $("#secondCat100").on("click", function (event) {
    event.preventDefault();
    console.log("click");
    questionObj = {
      "category": "ESPN's TOP 10 ALL-TIME ATHLETES",
      "value": 100,
      "question": "No. 2: 1912 Olympian; football star at Carlisle Indian School; 6 MLB seasons with the Reds, Giants & Braves",
      "answer": "Who is Thorpe?"
    };
    $(".jumbotron").text(questionObj.question)
    $(this).text("");
  });
  $("#secondCat200").on("click", function (event) {
    event.preventDefault();
    console.log("click");
    questionObj = {
      "category": "ESPN's TOP 10 ALL-TIME ATHLETES",
      "value": 200,
      "question": "No. 8: 30 steals for the Birmingham Barons; 2,306 steals for the Bulls",
      "answer": "Who is Jordan?"
    };
    $(".jumbotron").text(questionObj.question)
    $(this).text("");
  });
  $("#secondCat300").on("click", function (event) {
    event.preventDefault();
    console.log("click");
    questionObj = {
      "category": "ESPN's TOP 10 ALL-TIME ATHLETES",
      "value": 300,
      "question": "No. 1: Lettered in hoops, football & lacrosse at Syracuse & if you think he couldn't act, ask his 11 unclean buddies",
      "answer": "Who is Brown?"
    };
    $(".jumbotron").text(questionObj.question)
    $(this).text("");
  });
  $("#secondCat400").on("click", function (event) {
    event.preventDefault();
    console.log("click");
    questionObj = {
      "category": "ESPN's TOP 10 ALL-TIME ATHLETES",
      "value": 400,
      "question": "No. 10: FB/LB for Columbia U. in the 1920s; MVP for the Yankees in '27 & '36; Gibraltar in Cleats",
      "answer": "Who is Gehrig?"
    };
    $(".jumbotron").text(questionObj.question)
    $(this).text("");
  });
  $("#secondCat500").on("click", function (event) {
    event.preventDefault();
    console.log("click");
    questionObj = {
      "category": "ESPN's TOP 10 ALL-TIME ATHLETES",
      "value": 500,
      "question": "No. 5: Only center to lead the NBA in assists; track scholarship to Kansas U.; marathoner; volleyballer",
      "answer": "Who is Chamberlain?"
    };
    $(".jumbotron").text(questionObj.question)
    $(this).text("");
  });

  // third category
  $("#thirdCat100").on("click", function (event) {
    event.preventDefault();
    console.log("click");
    questionObj = {
      "category": "Xs & Os",
      "value": 100,
      "question": "Around 100 A.D. Tacitus wrote a book on how this art of persuasive speaking had declined since Cicero",
      "answer": "What is oratory?"
    };
    $(".jumbotron").text(questionObj.question)
    $(this).text("");
  });
  $("#thirdCat200").on("click", function (event) {
    event.preventDefault();
    console.log("click");
    questionObj = {
      "category": "Xs & Os",
      "value": 200,
      "question": "A quaint cocktail made with sugar & bitters",
      "answer": "What is an old-fashioned"
    };
    $(".jumbotron").text(questionObj.question)
    $(this).text("");
  });
  $("#thirdCat300").on("click", function (event) {
    event.preventDefault();
    console.log("click");
    questionObj = {
      "category": "Xs & Os",
      "value": 300,
      "question": "This stiff silken fabric is favored for bridal gowns, like Christina Applegate's in 2001",
      "answer": "What is organza?"
    };
    $(".jumbotron").text(questionObj.question)
    $(this).text("");
  });
  $("#thirdCat400").on("click", function (event) {
    event.preventDefault();
    console.log("click");
    questionObj = {
      "category": "Xs & Os",
      "value": 400,
      "question": "Cross-country skiing is sometimes referred to by these 2 letters, the same ones used to denote 90 in Roman numerals",
      "answer": "What is XC?"
    };
    $(".jumbotron").text(questionObj.question)
    $(this).text("");
  });
  $("#thirdCat500").on("click", function (event) {
    event.preventDefault();
    console.log("click");
    questionObj = {
      "category": "Xs & Os",
      "value": 500,
      "question": "This 1797 imbroglio began when 3 French agents demanded a huge bribe from U.S. diplomats",
      "answer": "What is the XYZ Affair?"
    };
    $(".jumbotron").text(questionObj.question)
    $(this).text("");
  });

  // fourth category
  $("#fourthCat100").on("click", function (event) {
    event.preventDefault();
    console.log("click");
    questionObj = {
      "category": "THE COMPANY LINE",
      "value": 100,
      "question": "In 1963, live on The Art Linkletter Show, this company served its billionth burger",
      "answer": "What is McDonald's? "
    };
    $(".jumbotron").text(questionObj.question)
    $(this).text("");
  });
  $("#fourthCat200").on("click", function (event) {
    event.preventDefault();
    console.log("click");
    questionObj = {
      "category": "THE COMPANY LINE",
      "value": 200,
      "question": "This housewares store was named for the packaging its merchandise came in & was first displayed on",
      "answer": "What is Crate & Barrel?"
    };
    $(".jumbotron").text(questionObj.question)
    $(this).text("");
  });
  $("#fourthCat300").on("click", function (event) {
    event.preventDefault();
    console.log("click");
    questionObj = {
      "category": "THE COMPANY LINE",
      "value": 300,
      "question": "This company's Accutron watch, introduced in 1960, had a guarantee of accuracy to within one minute a  month",
      "answer": "What is Bulova?"
    };
    $(".jumbotron").text(questionObj.question)
    $(this).text("");
  });
  $("#fourthCat400").on("click", function (event) {
    event.preventDefault();
    console.log("click");
    questionObj = {
      "category": "THE COMPANY LINE",
      "value": 400,
      "question": "Edward Teller & this man partnered in 1898 to sell high fashions to women",
      "answer": "Who is Bonwit?"
    };
    $(".jumbotron").text(questionObj.question)
    $(this).text("");
  });
  $("#fourthCat500").on("click", function (event) {
    event.preventDefault();
    console.log("click");
    questionObj = {
      "category": "THE COMPANY LINE",
      "value": 500,
      "question": "The Kirschner brothers, Don & Bill, named this ski company for themselves & the second-highest mountain",
      "answer": "What is K2?"
    };
    $(".jumbotron").text(questionObj.question)
    $(this).text("");
  });

  // fifth category
  $("#fifthCat100").on("click", function (event) {
    event.preventDefault();
    console.log("click");
    questionObj = {
      "category": "3-LETTER WORDS",
      "value": 100,
      "question": "In the title of an Aesop fable, this insect shared billing with a grasshopper",
      "answer": "What is the ant?"
    };
    $(".jumbotron").text(questionObj.question)
    $(this).text("");
  });
  $("#fifthCat200").on("click", function (event) {
    event.preventDefault();
    console.log("click");
    questionObj = {
      "category": "3-LETTER WORDS",
      "value": 200,
      "question": "Cows regurgitate this from the first stomach to the mouth & chew it again",
      "answer": "What is the cud?"
    };
    $(".jumbotron").text(questionObj.question)
    $(this).text("");
  });
  $("#fifthCat300").on("click", function (event) {
    event.preventDefault();
    console.log("click");
    questionObj = {
      "category": "3-LETTER WORDS",
      "value": 300,
      "question": "A small demon, or a mischievous child (who might be a little demon!)",
      "answer": "What is an imp?"
    };
    $(".jumbotron").text(questionObj.question)
    $(this).text("");
  });
  $("#fifthCat400").on("click", function (event) {
    event.preventDefault();
    console.log("click");
    questionObj = {
      "category": "3-LETTER WORDS",
      "value": 400,
      "question": "In geologic time one of these, shorter than an eon, is divided into periods & subdivided into epochs",
      "answer": "What is an era?"
    };
    $(".jumbotron").text(questionObj.question)
    $(this).text("");
  });
  $("#fifthCat500").on("click", function (event) {
    event.preventDefault();
    console.log("click");
    questionObj = {
      "category": "3-LETTER WORDS",
      "value": 500,
      "question": "A single layer of paper, or to perform one's craft diligently",
      "answer": "What is a ply"
    };
    $(".jumbotron").text(questionObj.question)
    $(this).text("");
  });

  // sixth category
  $("#sixthCat100").on("click", function (event) {
    event.preventDefault();
    console.log("click");
    questionObj = {
      "category": "EPITAPHS & TRIBUTES",
      "value": 100,
      "question": "Signer of the Dec. of Indep., framer of the Constitution of Mass., second President of the United States",
      "answer": "Who is John Adams?"
    };
    $(".jumbotron").text(questionObj.question)
    $(this).text("");
  });
  $("#sixthCat200").on("click", function (event) {
    event.preventDefault();
    console.log("click");
    questionObj = {
      "category": "EPITAPHS & TRIBUTES",
      "value": 200,
      "question": "And away we go",
      "answer": "Who is Jackie Gleason?"
    };
    
    $(".jumbotron").text(questionObj.question)
    $(this).text("");
    
  });
  $("#sixthCat300").on("click", function (event) {
    event.preventDefault();
    console.log("click");
    questionObj = {
      "category": "EPITAPHS & TRIBUTES",
      "value": 300,
      "question": "Outlaw: Murdered by a traitor and a coward whose name is not worthy to appear here",
      "answer": "Who is Jesse James?"
    };
    $(".jumbotron").text(questionObj.question)
    $(this).text("");
    
  });
  $("#sixthCat400").on("click", function (event) {
    event.preventDefault();
    console.log("click");
    questionObj = {
      "category": "EPITAPHS & TRIBUTES",
      "value": 400,
      "question": "1939 Oscar winner: ...you are a credit to your craft, your race and to your family",
      "answer": "Who is Hattie McDaniel?"
    };
    $(".jumbotron").text(questionObj.question)
    $(this).text("");
    
  });
  $("#sixthCat500").on("click", function (event) {
    event.preventDefault();
    console.log("click");
    questionObj = {
      "category": "EPITAPHS & TRIBUTES",
      "value": 500,
      "question": "Revolutionary War hero: His spirit is in Vermont now",
      "answer": "Who is Ethan Allen?"
    };
    $(".jumbotron").text(questionObj.question)
    $(this).text("");
    
  });

  var answerForm = $(".answer");
  var answerInput = $("#answer-input");
  var gameScore = 0
  var questionsRemaining = 30

  answerForm.on("submit", function (event) {
    event.preventDefault();
    console.log(questionObj);
    questionsRemaining = questionsRemaining--;
    var userAnswer = answerInput.val();
    checkAnswer(userAnswer, questionsRemaining);
  });

  function checkAnswer(userAnswer, questionsRemaining) {
    var correctAnswer = questionObj.answer

    if (correctAnswer.toUpperCase() == userAnswer.toUpperCase()) {
      gameScore = gameScore + questionObj.value;
      $(".jumbotron").text("Correct!   Score: $" + gameScore); 
      positionChecker(questionsRemaining);
    } else {
      gameScore = gameScore - questionObj.value;
      $(".jumbotron").text("Incorrect! Correct answer: " + questionObj.answer + "   Score: $" + gameScore); 
      positionChecker(questionsRemaining);
    }
  };

  function positionChecker(questionsRemaining) {
    if (questionsRemaining < 1) {
      alert("Your final score is: " + gameScore)
      window.location.replace("index");
    }
  }

  $(".logout-btn").on("click", function (event) {
    event.preventDefault();
    window.location.replace("login");
  });
});      
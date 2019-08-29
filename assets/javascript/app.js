$(document).ready(function(){

   
    $("#start-button").on("click", gameState.startTimer);
  
  });
  
  
  var gameState = {
  
   
    timeRemaining : 60,
  
    
    startTimer: function() {
      $("#timer").text("Time remaining: " + gameState.timeRemaining);
      setInterval(gameState.countdown, 1000);
      $("#start-page").hide();
      trivia.displayQuestions();
    },
  
    
    countdown: function() {
      gameState.timeRemaining--;
      $("#timer").text("Time remaining: " + gameState.timeRemaining);
      if (gameState.timeRemaining === 0) {
        gameState.stopTimer();
        $("#timer").empty();
      }
    },
  
    
    stopTimer: function() {
      clearInterval();
      trivia.checkAnswers();
    },
  
   
    showEndPage: function(numCorrect, numIncorrect, numUnanswered) {
      $("#end-page").show();
      $("#questions-box").empty();
      $("#timer").empty();
      $("#timer").hide();
      $("#correct-answers").text("Correct answers : " + numCorrect);
      $("#incorrect-answers").text("Incorrect answers : " + numIncorrect);
      $("#unanswered").text("Unaswered anserws : " + numUnanswered);
    }
  }
  
  
  var trivia = {
  
    
    displayQuestions: function() {
      var divContainer = $("#questions-box");
      var answerGroup = $(".form-check");
      divContainer.append('<h2>Answer the following questions:</h2>');
              
      for (var i = 0; i < questionBank.length; i++) {
  
        divContainer.append('<div id="question">' + questionBank[i].question + '</div>');
  
        var answer1 = questionBank[i].answers[0];
        var answer2 = questionBank[i].answers[1];
        var answer3 = questionBank[i].answers[2];
  
        divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer1 + '</label></div>');
        divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer2 + '</label></div>');
        divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer3 + '</label></div>');
      }
  
      
      var doneButton = '<button class="btn btn-primary" id="done-button" type="submit">Done</button>';
      divContainer.append(doneButton);
      $("#done-button").on("click", gameState.stopTimer);
    },
  
    
    checkAnswers: function() {
      var correctAnswer;
      var userAnswer;
      var numCorrect = 0;
      var numIncorrect = 0;
      var numUnanswered = 0;
  
      
      for (var i = 0; i < questionBank.length; i++) {
        correctAnswer = questionBank[i].correct;
        userAnswer = $('input[id=radio'+i+']:checked + label').text();
  
        if (userAnswer === correctAnswer) {
          numCorrect++;
        } else if (userAnswer === "") {
          numUnanswered++;
        } else if (userAnswer !== correctAnswer) {
          {
            numIncorrect++;
          }
        }
      }
  
      
      gameState.showEndPage(numCorrect, numIncorrect, numUnanswered);
    },
  }
  
  
  var questionBank =
  [
    {
      question: "Who is the best player in the NBA?",
      answers: ["Lebron James", "Kevin Durant", "Kawhi Leonard"],
      correct: "Lebron James"
    },
  
    {
      question: "What team does Kevin Durant play for?",
      answers: ["Warriors", "Sonics", "Nets"],
      correct: "Nets"
    },
    {
      question: "How many seconds are in a shotclock?",
      answers: ["12", "30", "24"],
      correct: "24"
    },
    {
      question: "When did the NBA first begin?",
      answers: ["1970", "2010", "1946"],
      correct: "1946"
    },
    {
      question: "How many players are allowed on the court from each team?",
      answers: ["4", "5", "6"],
      correct: "5"
    },
    {
      question: "Which team has the most championships?",
      answers: ["Celtics", "Lakers", "Bulls"],
      correct: "Celtics"
    },
    {
      question: "Who has the most MVPs all-time?",
      answers: ["Michael Jordan", "Lebron James", "Kareem Abdul Jabbar"],
      correct: "Kareem Abdul Jabbar"
    },
    {
      question: "How many players are on each team?",
      answers: ["15", "12", "10"],
      correct: "12"
    },
    {
      question: "Who is the greatest 3p Shooter all-time?",
      answers: ["Reggie Miller", "Ray Allen", "Steph Curry"],
      correct: "Ray Allen"
    },
    {
      question: "Who won the 2019 Championship?",
      answers: ["Raptors", "Warriors","Lakers"],
      correct: "Raptors"
    }
  ]
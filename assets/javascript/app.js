var card = $("#questions1");
var questions = [
  {
    question: "What time do you wake up?",
    answers: ["Before 6:30am-7:30am", "before 10am", "after 12pm"],
    correctAnswer: "Before 6:30am-7:30am"
  },
  {
    question: "What are you afraid of?",
    answers: [
      "Fear of Failure",
      "Fear of change",
      "Fear of rats",
      "Fear of being judge"
    ],
    correctAnswer: "Fear of rats"
  },
  {
    question: "What is the most important goal?",
    answers: ["Monthly", "Long-term", "Quarterly", "Daily"],
    correctAnswer: "Daily"
  },
  {
    question: "What easy things are you spending too much time on?",
    answers: ["Hard projects", "Socializing", "Social media", "Exercising"],
    correctAnswer: "Hard projects"
  },
  {
    question: "Which would be the best purchase?",
    answers: [
      "50% off your favorite clothing brand",
      "90% off flight ticket",
      "25% off Apple laptop",
      "None"
    ],
    correctAnswer: "None"
  }
];

var timer;

var game = {
  correct: 0,
  incorrect: 0,
  counter: 20,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#inner").prepend(
      "<h2>Time Remaining: <span id='counter-number'>20</span> Seconds</h2>"
    );

    $("#startb").remove();

    for (var i = 0; i < questions.length; i++) {
      card.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        card.append(
          "<input type='radio' name='question-" +
            i +
            "' value='" +
            questions[i].answers[j] +
            "''>" +
            questions[i].answers[j]
        );
      }
    }

    card.append("<button id='finished'>Done!</button>");
  },

  done: function() {
    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    this.result();
  },

  result: function() {
    clearInterval(timer);

    $("#inner h2").remove();

    card.html("<h2>All Done!</h2>");
    card.append("<h3>Correct Answers: " + this.correct + "</h3>");
    card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    card.append(
      "<h3>Unanswered: " +
        (questions.length - (this.incorrect + this.correct)) +
        "</h3>"
    );
  }
};

$(document).on("click", "#startb", function() {
  game.start();
});

$(document).on("click", "#finished", function() {
  game.done();
});

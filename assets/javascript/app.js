var panel = $("#play-area");

$(document).on("click", "#start", function(event){
  game.start();
});
$(document).on("click", "#done", function(event){
  game.done();
});

var questions = [{
	question: "Who is the only Broncos quarterback to win the Heisman Trophy?",
	choices: ["Tommy Maddox", "John Elway", "Peyton Manning", "Tim Tebow"],
	correctAnswer: "Tim Tebow"

}, {	

	question: "Who was the first head coach to take the Broncos to the Super Bowl?",
	choices: ["Mike Shanahan", "Dan Reeves", "Red Miller", "John Fox"],
	correctAnswer: "Red Miller"

}, {

	question: "Who was the first Broncos running back to rush for more than 20 touchdowns in a single season?",
	choices: ["Clinton Portis", "Terrell Davis", "Mike Anderson", "Floyd Little"],
	correctAnswer: "Terrell Davis"

}, {

	question: "Which NFL team originally drafted John Elway?",
	choices: ["Denver Broncos", "Oakland Raiders", "Baltimore Colts", "Dallas Cowboys"],
	correctAnswer: "Baltimore Colts"

}, {

	question: "Where did Peyton Manning go to college?",
	choices: ["University of Tennessee", "University of Florida", "University of Texas", "University of Colorado"],
	correctAnswer: "University of Tennessee"

}];

var game = {
	correct: 0,
	incorrect: 0,
	counter: 60,

  countdown: function() {
  	game.counter--;
  	$("#counter-number").html(game.counter);

  	if (game.counter === 0) {
  		alert("TIME'S UP");
  		game.done();

  	}
  },

  start: function() {
  	timer = setInterval(game.countdown, 1000);
  	$('#subcontainer').prepend('<h2>Time Remaining: <span id="counter-number">60</span> Seconds</h2>');
	  $("#start").remove();
	  

  	for (var i = 0; i < questions.length; i++) {
      panel.append('<h2>' + questions[i].question + '</h2>');
      for (var j = 0; j < questions[i].choices.length; j++){
		panel.append('<h6>' + '<input type="radio" name ="question' + '-' + i + '"value="' + questions[i].choices[j] + '">' + questions[i].choices[j] + "</h6>");
        }
  		}
  		panel.append("<button id='done'>DONE</button>");
      
  	},

  	done: function() {

  		$.each($("input[name='question-0']:checked"), function() {
  			if ($(this).val() == questions[0].correctAnswer) {
  				console.log(this);
  				  game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});
  		$.each($("input[name='question-1']:checked"), function() {
  			if ($(this).val() == questions[1].correctAnswer) {
  				console.log(this);
  				game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});
  		$.each($("input[name='question-2']:checked"), function() {
  			if ($(this).val() == questions[2].correctAnswer) {
  				console.log(this);
  				game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});
  		$.each($("input[name='question-3']:checked"), function() {
  			if ($(this).val() == questions[3].correctAnswer) {
  				console.log(this);
  				game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});
  		$.each($("input[name='question-4']:checked"), function() {
  			if ($(this).val() == questions[4].correctAnswer) {
  				console.log(this);
  				game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});

  		this.results();
  	},


  	  results:function() {
  	  	clearInterval(timer);

  	  	$("#subcontainer h2").remove();
  	   panel.html("<h2>You're Done!</h2>");
  	   panel.append("<h3>You got this many right: " + this.correct + "</h3>");
  	   panel.append("<h3>You got this many wrong: " + this.incorrect + "</h3>");
  	   panel.append("<h3>You didn't answer this many: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  	  
  	  }

  };
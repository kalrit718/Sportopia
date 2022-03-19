
//All work done by Kalindu

var isTimeUp = false;
var isThisMarked = false;
var correctAnswers = [1, 4, 4, 1, 2, 3, 1, 3, 4, 2];
var tempCurrentQuesName;
var currentQuesDivName;
var currentAnsDivName;

var tempQuesName;
var tempQuesName2;
var pendingAnswer;
var tempAnswerSpanName;
var tempAnswerSpan2;

document.getElementById("timeClosedDiv").style.display = "none";
document.getElementById("timeDiv").style.display = "none";
document.getElementById("timeNotStartedDiv").style.display = "block";
	
for(var i=1; i<=10; i++) {
	currentQuesDivName = "currentQuestionDivCoverId" + i.toString();
	currentAnsDivName = "currentAnswerDivCoverId" + i.toString();
	
	document.getElementById(currentQuesDivName).style.display = "none";
	document.getElementById(currentAnsDivName).style.display = "none";
}

function startQuiz() {
	
	document.getElementById("startQuizDivId").style.display = "none";
	document.getElementById("timeClosedDiv").style.display = "none";
	document.getElementById("timeDiv").style.display = "block";
	document.getElementById("timeNotStartedDiv").style.display = "none";
	document.getElementById("startButton").style.visibility = "hidden";
	
	for(var i=1; i<=10; i++) {
		currentQuesDivName = "currentQuestionDivCoverId" + i.toString();
		currentAnsDivName = "currentAnswerDivCoverId" + i.toString();
		
		document.getElementById(currentQuesDivName).style.display = "block";
		document.getElementById(currentAnsDivName).style.display = "none";
		document.getElementById("timeClosedDiv").style.display = "none";
		document.getElementById("timeDiv").style.display = "block";
	}
	
	if(!isTimeUp) {
		var fiveMinutes = 60 * 10,
			display = document.querySelector('#time');
		startTimer(fiveMinutes, display);
	}
	
}

function startTimer(duration, display) {
    var timer = duration;
	var minutes; 
	var seconds;
	
    var intervalId = setInterval(() => {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

		if(minutes==0 && seconds==0) {
			isTimeUp = true;
			clearInterval(intervalId);
			quizCheck();
		}

        if (--timer < 0) {
            timer = duration;
        }
		
    }, 1000);
}

function submitConfirmation() {
	if (confirm("Are You Sure?")) {
		quizCheck();
	} else{
		
	}
}

function quizCheck() {
	
	if(!isValid() && !isTimeUp) {
		alert("Please select all answers!");
		return;
	}
	
	hideAllCurrentQuestions();
		
	for(var i=1; i<=10; i++) {
		
		isThisMarked = false;
		
		tempQuesName = "q" + i.toString();
		tempAnswerSpanName = "answerSpan" + i.toString();
		
		for(var j=1; j<=4; j++) {
			tempQuesName2 = tempQuesName + "a" + j.toString();
			
			if(isThisMarked) {
				continue;
			}
			
			if (document.getElementById(tempQuesName2).checked) {
			  pendingAnswer = document.getElementById(tempQuesName2).value;
				if(pendingAnswer == correctAnswers[i-1]) {
					document.getElementById(tempAnswerSpanName).classList.add("answerHighlightCorrect");
					document.getElementById(tempAnswerSpanName).innerHTML = "correct!";
					isThisMarked = true;
					continue;

				} else {
					document.getElementById(tempAnswerSpanName).classList.add("answerHighlightIncorrect");
					document.getElementById(tempAnswerSpanName).innerHTML = "incorrect!";
					isThisMarked = true;
					continue;
				}
			  
			} else if(!(document.getElementById(tempQuesName2).checked) && isTimeUp && j==4 && !isThisMarked) {
				document.getElementById(tempAnswerSpanName).classList.add("answerHighlightIncorrect");
				document.getElementById(tempAnswerSpanName).innerHTML = "incorrect!";
				isThisMarked = true;
				continue;
			}
			
		}
	}
}

function isValid() {
	for(var i=1; i<=10; i++) {
		tempQuesName = "q" + i.toString();
		
		var isAnyChecked = false;
		
		for(var j=1; j<=4; j++) {
			tempQuesName2 = tempQuesName + "a" + j.toString();
			
			if (document.getElementById(tempQuesName2).checked) {
			  isAnyChecked = true;
			}
		}
		if(!isAnyChecked) {
			
			return false;
		}
		
	}
	if(isAnyChecked) {
		return true;
	}
}

function hideAllCurrentQuestions() {
	for(var i=1; i<=10; i++) {
		currentQuesDivName = "currentQuestionDivCoverId" + i.toString();
		currentAnsDivName = "currentAnswerDivCoverId" + i.toString();

		document.getElementById(currentQuesDivName).style.display = "none";
		document.getElementById(currentAnsDivName).style.display = "block";
	}
	
	document.getElementById("timeDiv").style.display = "none";
	document.getElementById("timeClosedDiv").style.display = "block";
	document.getElementById("timeNotStartedDiv").style.display = "none";
}

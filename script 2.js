//Question bank
var questionBank= [
    {
        question : 'What kind of Naz do we like?',
        option : ['sassy','cool','mad'],
        answer : 'cool'
    },
    {
        question : 'Does Naz like machiato?',
        option : ['Yes','maybe','No'],
        answer : 'Yes'
    },
    {
        question : 'Whats Naz dream lifestyle?',
        option : ['be a housewife','become a scammer','beat up men'],
        answer : 'be a housewife'
    },
	
    {
        question : 'how many hours does Naz sleep?',
        option : ['5hrs','0','10+'],
        answer : '10+'
    },
    {
        question : 'does Naz need to stop ignoring people?',
        option : ['maybe','yessss!!','no'],
        answer : 'yessss!!'
    }		
    
]

/*var score = 0;

for(var i = 0; i < questionBank.length; i++){
	var answer = window.prompt(questionBank[i].question);
	if (response == questionBank[i].answer){
		score++;
		alert("Correct!");
	} else {
		alert("WRONG!");
	}
}
alert("you got " + score + "/" + questionBank.length);*/


var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;



//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    stat.innerHTML= "Question "+(i+1)+' '+'of '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);

    if (response == questionBank[i].answer){
		score++;
		alert("Correct!");
	} else {
		alert("WRONG!");
	}
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();






//Question bank
var questionBank= [
    {
        question : 'What is facial recognition technology, and how is it commonly used?',
        option : ['Identifies individuals based on facial features',' Analyzes facial expressions','Enhances facial features in photographs'],
        answer : 'Identifies individuals based on facial features'
    },
    {
        question : 'Can facial recognition technology be biased? If so, why?',
        option : ['Yes, because it relies on subjective human judgments','Yes, because it can be influenced by societal biases in the training data','No, facial recognition technology is completely objective'],
        answer : 'Yes, because it can be influenced by societal biases in the training data'
    },
    {
        question : 'What are some potential consequences of biased facial recognition technology?',
        option : ['Misidentification and false accusations','Privacy invasion and data breaches','Improved accuracy in identifying individuals'],
        answer : 'Misidentification and false accusations'
    },
    {
        question : 'Which factors can contribute to bias in facial recognition algorithms?',
        option : ['Insufficient computational power','Lack of diverse training data','Excessive reliance on user input'],
        answer : 'Lack of diverse training data'
    },
    {
        question : 'How can bias in facial recognition technology affect different racial or ethnic groups?',
        option : ['It can result in higher accuracy for all groups','It can lead to disproportionate misidentification of certain groups','It has no impact on different racial or ethnic groups'],
        answer : 'It can lead to disproportionate misidentification of certain groups'
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






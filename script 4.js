//Question bank
var questionBank= [
    {
        question : 'What are the primary methods used in facial recognition algorithms for identifying individuals?',
        option : ['Feature extraction and matching','Emotional analysis and interpretation','Voice recognition and comparison'],
        answer : 'Feature extraction and matching'
    },
    {
        question : 'How does facial recognition technology handle variations in facial appearance, such as changes in expression, aging, or facial hair?',
        option : ['By relying on static facial features that remain consistent over time','By utilizing machine learning algorithms to adapt to facial variations','By disregarding variations and focusing solely on unique facial structures'],
        answer : 'By utilizing machine learning algorithms to adapt to facial variations'
    },
    {
        question : 'What are some ethical concerns associated with the widespread adoption of facial recognition technology?',
        option : ['Invasion of privacy and surveillance concerns','Lack of technological advancements and accuracy','Positive impact on public safety and security'],
        answer : 'Invasion of privacy and surveillance concerns'
    },
    {
        question : 'How can facial recognition technology be utilized in the field of law enforcement?',
        option : ['Identifying potential suspects in criminal investigations','Determining an individuals emotional state and intentions','Enhancing digital images for better visualization'],
        answer : 'Identifying potential suspects in criminal investigations'
    },
    {
        question : 'What are some potential countermeasures that can be employed to mitigate the negative effects of biased facial recognition technology?',
        option : ['Implementing strict regulations and guidelines for facial recognition use','Training algorithms exclusively on data from diverse racial and ethnic groups','Eliminating facial recognition technology altogether due to inherent biases'],
        answer : 'Implementing strict regulations and guidelines for facial recognition use'
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

var numQues = 15;

var numChoi = 3;
var questions={
    questions:["He -------------------- it.",],
    answers:["doesn't like","don't come","come","don't","doesn't make","seem","don't have","doesn't have","takes","want","comes","doesn't know","tries","play","lasts"],
    options:[[],[],[]]
}

function getScore(form) {

var score = 0;

var currElt;

var currSelection;

for (i=0; i<numQues; i++) {

currElt = i*numChoi;

answered=false;

for (j=0; j<numChoi; j++) {

currSelection = form.elements[currElt + j];

if (currSelection.checked) {

answered=true;

if (currSelection.value == questions.answers[i]) {

score++;

break;

}

}

}

if (answered ===false){alert("Do answer all the questions, Please") ;return false;}

}

var scoreper = Math.round(score/numQues*100);

form.percentage.value = scoreper + "%";

form.mark.value=score;

}
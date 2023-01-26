var set=[
    {
        "qno":1,
        "question":"Which type of JavaScript language is _____?",
        "option1":"Object-Oriented",
        "option2":"Object-Based",
        "option3":"Assembly-language",
        "option4":"High-level",
        "answer":"b",
        "user":""
    },
    {
        "qno":2,
        "question":"Which one of the following also known as Conditional Expression:",
        "option1":"Alternative to if-else",
        "option2":"Switch statement",
        "option3":"If-then-else statement",
        "option4":"immediate if",
        "answer":"d",
        "user":""
    },
    {
        "qno":3,
        "question":"In JavaScript, what is a block of statement?",
        "option1":"Conditional block",
        "option2":"block that combines a number of statements into a single compound statement",
        "option3":"both conditional block and a single statement",
        "option4":"block that contains a single statement",
        "answer":"b",
        "user":""
    },
    {
        "qno":4,
        "question":"When interpreter encounters an empty statements, what it will do:",
        "option1":"Shows a warning",
        "option2":"Prompts to complete the statement",
        "option3":"Throws an error",
        "option4":"Ignores the statements",
        "answer":"d",
        "user":""
    },
    {
        "qno":5,
        "question":"The 'function' and  'var' are known as:",
        "option1":"Keywords",
        "option2":"Data types",
        "option3":"Declaration statements",
        "option4":"Prototypes",
        "answer":"c",
        "user":""
    },
    {
        "qno":6,
        "question":"When there is an indefinite or an infinite value during an arithmetic computation in a program, then JavaScript prints______.",
        "option1":"Prints an exception error",
        "option2":"Prints an overflow error",
        "option3":"Displays 'Infinity'",
        "option4":"Prints the value as such",
        "answer":"c",
        "user":""
    },
    {
        "qno":7,
        "question":"In JavaScript, what will be used for calling the function definition expression:",
        "option1":"Function prototype",
        "option2":"Function literal",
        "option3":"Function calling",
        "option4":"Function declaration",
        "answer":"b",
        "user":""
    },
    {
        "qno":8,
        "question":"In the JavaScript, which one of the following is not considered as an error:",
        "option1":"Syntax error",
        "option2":"Missing of semicolons",
        "option3":"Division by zero",
        "option4":"Missing of Bracket",
        "answer":"c",
        "user":""
    },
    {
        "qno":9,
        "question":"Which of the following number object function returns the value of the number?",
        "option1":"toString()",
        "option2":"valueOf()",
        "option3":"toLocaleString()",
        "option4":"toPrecision()",
        "answer":"b",
        "user":""
    }
];
var index=0;
var qno=document.getElementById('qno');
var question=document.getElementById('question');
var option1=document.getElementById('option1');
var option2=document.getElementById('option2');
var option3=document.getElementById('option3');
var option4=document.getElementById('option4');
var ans1 =document.getElementById('ans1');
var ans2 =document.getElementById('ans2');
var ans3 =document.getElementById('ans3');
var ans4 =document.getElementById('ans4');
var ques=[
    document.getElementById('ques1'),
    document.getElementById('ques2'),
    document.getElementById('ques3'),
    document.getElementById('ques4'),
    document.getElementById('ques5'),
    document.getElementById('ques6'),
    document.getElementById('ques7'),
    document.getElementById('ques8'),
    document.getElementById('ques9')
];
function display(){
    checking();
    qno.innerHTML=set[index].qno;
    question.innerHTML=set[index].question;
    option1.innerHTML=set[index].option1;
    option2.innerHTML=set[index].option2;
    option3.innerHTML=set[index].option3;
    option4.innerHTML=set[index].option4;
}
function checking(){
    clearOptions();
    if(set[index].user=="a"){
        ans1.checked = true;
    }
    else if(set[index].user=="b"){
        ans2.checked=true;
    }
    else if(set[index].user=="c"){
        ans3.checked=true;
    }
    else if(set[index].user=="d"){
        ans4.checked=true;
    }
}
function clearOptions(){
    ans1.checked = false;
    ans2.checked = false;
    ans3.checked = false;
    ans4.checked = false;
}
function clearClick(){
    set[index].user="";
    clearOptions();
    navColor();
}
function saveAns(a){
    set[index].user=a;
    navColor();
}
function prev(){
    nextbttn.style.display="block";
    if(index>0){
        index--;
    }
    else{
        alert("STOOOOOOOOOOP THIS IS THE FIRST QUESTION\nI REMOVED THE BUTTON FOR YOU");
        prevbttn.style.display="none";
    }
    display();
}
function next(){
    prevbttn.style.display = "block";
    if(index != set.length-1){
        index++;
    }
    else{
        alert("STOOOOOOOOOOP THIS IS THE LAST QUESTION\nI REMOVED THE BUTTON FOR YOU");
        nextbttn.style.display="none";
    }
    display();
}
function navColor(){
    let i=0;
    while(i<=8){
        if(set[i].user != ""){
            ques[i].style.backgroundColor="green";
        }
        else{
            ques[i].style.backgroundColor="red";
        }
        i++;
    }
}
function navDirect(x){
    index=x;
    display();
}

function submit(){
    let marks=0;
    let i=0;
    while(i<=8){
        if(set[i].user == set[i].answer){
            marks++;
        }
        i++;
    }
    let x=document.getElementById('mark');
    x.innerHTML=marks;
    document.getElementById('container').style.display="none";
    document.getElementById('ansFinal').style.display="block";
}
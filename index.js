let readline = require('readline');
let score =0;

let userName = readlineSync.question("Please enter your name: ");
console.log(`Welcome ${userName} to the Quizyfy App! Let's start the quiz.`);
console.log("please select any option from a, b, c, d");


const database = {
    data: [
        {
            question:`let a={} , b={}
            console.log(a===b) // true or false',
            console.log(a==b)`,
            options: {
                a: "true",
                b: "false",
                c: "undefined",
                d: "null"
            },
            correctAnswer: "a",
        },
        {
            question:" Objest.assign(target, ...sources) creates which type of copy?",
            options: {

                a: "Deep copy",
                b: "Shallow copy",
                c:"nested copy",
                d: "None of the above"
            },
            correctAnswer: "b",
         },
         {
            question:"Is method chaining is possible with forEach?",
            options: {
                a: "Yes",
                b: "No",
                c: "Maybe",
                d: "Depends on the context"
            },  
            correctAnswer: "b",
        },
    ]

};

const Leaderboard = {
    data: [
        {   
            name: "Murali",
            score: 3
        },
        {
            name: "Vijay",
            score: 2
        },
        {
            name: "Ganesh",
            score: 1
        }
    ]       
};

function playGame(userAnswer,correctAnswer){
    if (userAnswer === correctAnswer) {
        console.log("Correct answer!");
        score++;
    } else {
        console.log(`Wrong answer! The correct answer is: ${correctAnswer}`);
    }
} 

function showQuestionAndOptions(){
    for (let i = 0; i < database.data.length; i++) {
        console.log(`Question ${i + 1}: ${database.data[i].question}`);
        for (let key in database.data[i].options){
            console.log(`${key}: ${database.data[i].options[key]}`);
        }
        let userAnswer = readline.question("Please enter your answer (a, b, c, d): ").toLowerCase();
        playGame(userAnswer, database.data[i].correctAnswer);
        console.log("\n");
    }
}

function showhighScore(Leaderboard){
    Leaderboard.data.push(name: userName, score: score);
    let sortedScoreList = Leaderboard.data.sort((a, b) => b.score - a.score);
    console.log("Check your score in leaderBoard :");
    for (let leader of sortedScoreList) {
        console.log(`${leader.name}- Score: ${leader.score}`); 
}
}

showQuestionAndOptions();
console.log(`Your final score is: ${score} out of ${database.data.length}`);
if (score === database.data.length) {
    console.log("Congratulations! You answered all questions correctly!");
}   else {
    console.log("Better luck next time!");
}
showhighScore(Leaderboard);
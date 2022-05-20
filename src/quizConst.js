function Question(questionText, answerOptions, correctAnswer) {
    this.questionText = questionText;
    this.answerOptions = answerOptions;
    this.correctAnswer = correctAnswer;
}

Question.prototype.checkAnswer = function (answer) {
    return answer === this.correctAnswer
}

let Question1 = new Question("Hangisi bir JS paket yönetim uygulamasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c");
let Question2 = new Question("Hangisi bir .net paket yönetim uygulamasıdır?", { a: "Node.js", b: "nuget", c: "Npm" }, "b");

let allQuestion = [
    new Question("1-Hangisi bir JS paket yönetim uygulamasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
    new Question("2-Hangisi bir JS paket yönetim uygulamasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
    new Question("3-Hangisi bir JS paket yönetim uygulamasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
    new Question("4-Hangisi bir JS paket yönetim uygulamasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c")
];

//Quiz Exam Questions
function Quiz(allQuestion) {
    this.allQuestion = allQuestion;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestion = function () {
    return this.allQuestion[this.questionIndex]
}

const quiz = new Quiz(allQuestion);


document.querySelector(".btn_start").addEventListener("click", function () {
    if (quiz.allQuestion.length != quiz.questionIndex) { //dizi içerisindeki eleman sayısına eşit olana kadar devam edip sonunda durur
document.querySelector(".quiz_box").classList.add("active")
        console.log(quiz.getQuestion());
        quiz.questionIndex += 1;
    } else {
        console.log("Quiz over!");
    }
})

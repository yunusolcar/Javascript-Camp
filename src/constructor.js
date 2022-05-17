//EX-1
function Questions(questionText, answers, correctAnswer) {
    this.questionText = questionText;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
    this.answerCheck = function (answers) {
        return answers == this.correctAnswer
    }
}
let Question1 = new Questions("Hangisi bir JS paket yönetim uygulamasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c");
let Question2 = new Questions("Hangisi bir .net paket yönetim uygulamasıdır?", { a: "Node.js", b: "nuget", c: "Npm" }, "b");

console.log(Question1.questionText);
console.log(Question1.correctAnswer);
console.log(Question1.answerCheck("a"));


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
    new Question("1-Hangisi bir JS paket yönetim uygulamasıdır?", { A: ": Node.js", B: ": Typescript", C: ": Npm", D: ": Nuget" }, "c"),
    new Question("2-Hangisi bir tS paket yönetim uygulamasıdır?", { a: ": Node.js", b: ": Typescript", c: ": Npm" }, "c"),
    new Question("3-Hangisi bir lS paket yönetim uygulamasıdır?", { a: ": Node.js", b: ": Typescript", c: ": Npm" }, "c"),
    new Question("4-Hangisi bir kS paket yönetim uygulamasıdır?", { a: ": Node.js", b: ": Typescript", c: ": Npm" }, "c")
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
    document.querySelector(".quiz_box").classList.add("active")
    showQuestion(quiz.getQuestion())
}
)

document.querySelector(".next_btn").addEventListener("click", function () {
    if (quiz.allQuestion.length != quiz.questionIndex + 1) { //dizi içerisindeki eleman sayısına eşit olana kadar devam edip sonunda durur
        quiz.questionIndex += 1;
        showQuestion(quiz.getQuestion())
    } else {
        console.log("Quiz over!");
    }
})

function showQuestion(Question) {
    let questionT = `<span>${Question.questionText}</span>`;
    let options = '';

    for (let choice in Question.answerOptions) {
        options +=
            `
                <div class="option">
                    <span>${choice} ${Question.answerOptions[choice]}</span>
                </div>
            `;
    }
    const option_list = document.querySelector(".option_list");
    document.querySelector(".question_text").innerHTML = questionT;
    option_list.innerHTML = options;

    const optionAll = option_list.querySelectorAll(".option");
    console.log(optionAll);

    for (let opt of optionAll) {
        opt.setAttribute("onclick", "optionSelected(this)")
    }

}
function optionSelected(option) {
    let choice = option.querySelector("span b").textContent;
    console.log(choice);
}
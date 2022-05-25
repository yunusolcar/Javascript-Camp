// OOP: Nesne Tabanlı Programlama

function Question(questionText, answerOptions, correctAnswer) {
    this.questionText = questionText;
    this.answerOptions = answerOptions;
    this.correctAnswer = correctAnswer;
}

Question.prototype.checAnswer = function (answer) {
    return answer === this.correctAnswer
}

let allQuestions = [
    new Question("1-Hangisi javascript paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm", d: "Nuget" }, "c"),
    new Question("2-Hangisi javascript paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
    new Question("3-Hangisi javascript paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
    new Question("4-Hangisi javascript paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c")
];

function Quiz(allQuestions) {
    this.allQuestions = allQuestions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestion = function () {
    return this.allQuestions[this.questionIndex];
}

const quiz = new Quiz(allQuestions);

document.querySelector(".btn_start").addEventListener("click", function () {
    document.querySelector(".quiz_box").classList.add("active");
    showQuestion(quiz.getQuestion());
    document.querySelector(".next_btn").classList.remove("show");
})

document.querySelector(".next_btn").addEventListener("click", function () {
    if (quiz.allQuestions.length != quiz.questionIndex + 1) {
        quiz.questionIndex += 1;
        showQuestion(quiz.getQuestion());
        document.querySelector(".next_btn").classList.remove("show");
    } else {
        console.log("Quiz Over!");
    }
});

const option_list = document.querySelector(".option_list");
const correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>';
const incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>';

function showQuestion(soru) {
    let question = `<span>${soru.questionText}</span>`;
    let options = '';

    for (let answer in soru.answerOptions) {
        options +=
            `
                <div class="option"> 
                    <span><b>${answer}</b>: ${soru.answerOptions[answer]}</span>
                </div>
            `;
    }
    document.querySelector(".question_text").innerHTML = question;
    option_list.innerHTML = options;

    const option = option_list.querySelectorAll(".option");

    for (let opt of option) {
        opt.setAttribute("onclick", "optionSelected(this)")
    }
}

function optionSelected(option) {
    let answer = option.querySelector("span b").textContent;
    let soru = quiz.getQuestion();

    if (soru.checAnswer(answer)) {
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend", correctIcon);
    } else {
        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend", incorrectIcon);
    }

    for (let i = 0; i < option_list.children.length; i++) {
        option_list.children[i].classList.add("disabled");
    }

    document.querySelector(".next_btn").classList.add("show");
}

import { reactive } from "vue";

export const themeStore = reactive({
  // THEMES
  darkTheme: false,
  setDarkTheme: function (bool) {
    this.darkTheme = bool;
    if (this.darkTheme) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
    console.log("Theme set to : " + (this.darkTheme ? "Dark" : "Light"));
  },
});

export const homeStore = reactive({
  getData: async function () {
    const response = await fetch("/src/assets/data/data.json");
    const jsonData = await response.json();
    return jsonData.quizzes;
  },
  validateTitle: async function (title) {
    const quizzes = await this.getData();
    return quizzes.some((quiz) => title === quiz.title);
  },
  selectQuiz: async function (title) {
    const isValid = this.validateTitle(title);
    if (!isValid) {
      throw Error(`validateTitle: ${title} is not a valid quiz`);
    } else {
      const quizzes = await this.getData();
      const quiz = quizzes.find((i) => i.title === title);
      QuizStore.setQuiz(quiz);
    }
  },
});

export const QuizStore = reactive({
  title: null,
  icon: null,
  color: null,
  bgColor: null,
  questions: null,
  questionIndex: 1,
  selectedOption: null,
  questionAnswered: false,
  correct: 0,
  nextQuestion: function () {
    this.questionIndex++;
    this.questionAnswered = false;
    this.setOption(null);
  },
  getQuestion: function () {
    return this.questions[this.questionIndex].question;
  },
  getOptions: function () {
    return this.questions[this.questionIndex].options;
  },
  getAnswer: function () {
    return this.questions[this.questionIndex].answer;
  },
  setQuiz: function (quiz) {
    this.title = quiz.title;
    this.icon = quiz.icon;
    this.color = quiz.color;
    this.bgColor = quiz.bgColor;
    this.questions = quiz.questions.sort(() => Math.random() - 0.5);
  },
  setOption: function (option) {
    this.selectedOption = option;
  },
});

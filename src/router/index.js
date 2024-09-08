import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import QuizView from "@/views/QuizView.vue";
import ScoreView from "@/views/ScoreView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/frontend-quiz-app",
      name: "home",
      component: HomeView,
    },
    {
      path: "/frontend-quiz-app/quiz",
      name: "quiz",
      component: QuizView,
    },
    {
      path: "/frontend-quiz-app/score",
      name: "score",
      component: ScoreView,
    },
  ],
});

export default router;

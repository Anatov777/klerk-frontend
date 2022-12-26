import { createRouter, createWebHistory } from "vue-router";
import RubricView from "@/views/RubricView.vue";
import SubscriptionView from "@/views/SubscriptionView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: RubricView,
    },
    {
      path: "/subs",
      name: "subs",
      component: SubscriptionView,
    },
  ],
});

export default router;

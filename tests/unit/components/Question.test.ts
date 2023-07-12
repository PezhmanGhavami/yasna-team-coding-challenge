import { describe, expect, it, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import { setActivePinia, createPinia } from "pinia";

import Question from "@/components/Question.vue";

import { useQuizStore } from "@/stores/quiz";

describe("Question", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("renders", () => {
    const quiz = useQuizStore();

    const wrapper = mount(Question);
    expect(wrapper.html()).contain(quiz.currentQuestion.question_text);
  });
});

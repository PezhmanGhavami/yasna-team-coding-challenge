import { describe, expect, it, beforeEach, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { setActivePinia, createPinia } from "pinia";

import AnswersContainer from "@/components/AnswersContainer.vue";
import Answer from "@/components/Answer.vue";

import { useQuizStore } from "@/stores/quiz";

vi.stubGlobal("navigateTo", (route: string) => {
  return route;
});

describe("AnswerContainer", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("renders", () => {
    const quiz = useQuizStore();
    const wrapper = mount(AnswersContainer);

    const answers = wrapper.findAllComponents(Answer);

    expect(answers.length).toBe(quiz.currentQuestion.answers.length);
  });

  describe("when an answer is clicked", () => {
    it("navigates to the next page", () => {
      const wrapper = mount(AnswersContainer);

      const answer = wrapper.findComponent(Answer);

      // @ts-ignore:disable-next-line
      const navigateToSpy = vi.spyOn(global, "navigateTo");
      answer.trigger("click");
      expect(navigateToSpy).toHaveBeenCalledOnce();
    });
  });
});

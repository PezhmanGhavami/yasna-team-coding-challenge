import { describe, expect, it, beforeEach, afterEach, vi } from "vitest";
import { VueWrapper, shallowMount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";

import AnswersContainer from "@/components/AnswersContainer.vue";
import Answer from "@/components/Answer.vue";

import { useQuizStore } from "@/stores/quiz";

vi.stubGlobal("navigateTo", (route: string) => {
  return route;
});

describe("AnswerContainer", () => {
  let wrapper: VueWrapper | null = null;

  beforeEach(() => {
    wrapper = shallowMount(AnswersContainer, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
          }),
        ],
      },
    });
  });

  afterEach(() => {
    wrapper?.unmount();
  });

  it("renders", () => {
    const quiz = useQuizStore();
    const wrapper = shallowMount(AnswersContainer);
    const answers = wrapper.findAllComponents(Answer);

    expect(answers.length).toBe(quiz.currentQuestion.answers.length);
  });

  describe("when an answer is clicked", () => {
    it("navigates to the next page", () => {
      const quiz = useQuizStore();
      const wrapper = shallowMount(AnswersContainer);
      const answer = wrapper.findComponent(Answer);

      answer.trigger("click");

      expect(quiz.answerQuestion).toHaveBeenCalledOnce();
    });
  });
});

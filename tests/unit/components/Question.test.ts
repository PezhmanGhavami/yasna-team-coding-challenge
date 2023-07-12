import { describe, expect, it, beforeEach, afterEach, vi } from "vitest";
import { VueWrapper, shallowMount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";

import Question from "@/components/Question.vue";

import { useQuizStore } from "@/stores/quiz";

describe("Question", () => {
  let wrapper: VueWrapper | null = null;

  beforeEach(() => {
    wrapper = shallowMount(Question, {
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

    const wrapper = shallowMount(Question);
    expect(wrapper.html()).contain(quiz.currentQuestion.question_text);
  });
});

import { describe, expect, it, beforeEach, afterEach, vi } from "vitest";
import { VueWrapper, shallowMount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";

import TimerComponent from "@/components/TimerComponent.vue";

import { useQuizStore } from "@/stores/quiz";

describe("TimerComponent", () => {
  let wrapper: VueWrapper | null = null;

  beforeEach(() => {
    vi.useFakeTimers();

    wrapper = shallowMount(TimerComponent, {
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

  it("renders the seconds remaining", () => {
    const wrapper = shallowMount(TimerComponent);

    const remainigTime = wrapper.find("p");

    expect(remainigTime.exists()).toBeTruthy();
  });
  it("renders the timer body", () => {
    const wrapper = shallowMount(TimerComponent);

    const timerBodyCotnainer = wrapper.find(".timer-body-container");
    const timerBody = wrapper.find(".timer-body");

    expect(timerBodyCotnainer.exists()).toBeTruthy();
    expect(timerBody.exists()).toBeTruthy();
  });

  describe("When the time runs out", () => {
    it("marks the current question as wrong", () => {
      // const quiz = useQuizStore();
      // const wrapper = shallowMount(TimerComponent);
      // vi.advanceTimersByTime(10 * 1000);
      // expect(quiz.markQuestionAsWrong).toHaveBeenCalledOnce();
    });
  });
});

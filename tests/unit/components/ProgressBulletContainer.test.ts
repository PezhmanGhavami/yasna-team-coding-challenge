import { describe, expect, it, beforeEach, afterEach, vi } from "vitest";
import { VueWrapper, shallowMount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";

import ProgressBullet from "@/components/ProgressBullet.vue";
import ProgressBulletsContainer from "@/components/ProgressBulletsContainer.vue";

import { useQuizStore } from "@/stores/quiz";

vi.stubGlobal("navigateTo", (route: string) => {
  return route;
});

describe("ProgressBulletsContainer", () => {
  let wrapper: VueWrapper | null = null;

  beforeEach(() => {
    wrapper = shallowMount(ProgressBulletsContainer, {
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
    const wrapper = shallowMount(ProgressBulletsContainer);

    const progressBullets = wrapper.findAllComponents(ProgressBullet);

    expect(progressBullets.length).toBe(quiz.answerProgress.length);
  });
});

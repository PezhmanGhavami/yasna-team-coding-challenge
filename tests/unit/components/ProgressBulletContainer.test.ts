import { describe, expect, it, beforeEach, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { setActivePinia, createPinia } from "pinia";

import ProgressBullet from "@/components/ProgressBullet.vue";
import ProgressBulletsContainer from "@/components/ProgressBulletsContainer.vue";

import { useQuizStore } from "@/stores/quiz";

vi.stubGlobal("navigateTo", (route: string) => {
  return route;
});

describe("ProgressBulletsContainer", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("renders", () => {
    const quiz = useQuizStore();
    const wrapper = mount(ProgressBulletsContainer);

    const progressBullets = wrapper.findAllComponents(ProgressBullet);

    expect(progressBullets.length).toBe(quiz.answerProgress.length);
  });
});

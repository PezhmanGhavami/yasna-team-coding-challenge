import { describe, beforeEach, it, expect, vi } from "vitest";
import { setActivePinia, createPinia } from "pinia";

import { useQuizStore } from "@/stores/quiz";

vi.stubGlobal("navigateTo", (route: string) => {
  return route;
});

describe("quiz store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  describe("When startTheQuiz is called", () => {
    it("starts the quiz", () => {
      const quiz = useQuizStore();
      expect(quiz.hasStarted).toBe(false);
      quiz.startTheQuiz();
      expect(quiz.hasStarted).toBe(true);
    });

    it("sets the isFinished to false", () => {
      const quiz = useQuizStore();
      quiz.startTheQuiz();
      expect(quiz.isFinished).toBe(false);
    });

    it("navigates to /question/1", () => {
      const quiz = useQuizStore();
      // @ts-ignore:disable-next-line
      const navigateToSpy = vi.spyOn(global, "navigateTo");
      quiz.startTheQuiz();
      expect(navigateToSpy).toHaveBeenCalledWith("/question/1");
    });
  });
});

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

  describe("When restartTheQuiz is called", () => {
    it("resets the quiz state", () => {
      const quiz = useQuizStore();
      quiz.restartTheQuiz();
      expect(quiz.index).toBe(0);
    });

    it("starts the quiz", () => {
      const quiz = useQuizStore();
      quiz.startTheQuiz();
      expect(quiz.hasStarted).toBe(true);
    });

    it("sets the isFinished to false", () => {
      const quiz = useQuizStore();
      quiz.restartTheQuiz();
      expect(quiz.isFinished).toBe(false);
    });

    it("navigates to /question/1", () => {
      const quiz = useQuizStore();
      // @ts-ignore:disable-next-line
      const navigateToSpy = vi.spyOn(global, "navigateTo");
      quiz.restartTheQuiz();
      expect(navigateToSpy).toHaveBeenCalledWith("/question/1");
    });
  });

  describe("When answerQuestion is called", () => {
    it("sets the progress result for the current index to the passed value", () => {
      const quiz = useQuizStore();
      expect(quiz.hasStarted).toBe(false);
      quiz.answerQuestion(true);
      expect(quiz.answerProgress[quiz.index - 1]).toBe(true);
    });

    it("sets the the index to index + 1", () => {
      const quiz = useQuizStore();
      const oldIndex = quiz.index;
      quiz.answerQuestion(true);
      expect(quiz.index).toBe(oldIndex + 1);
    });

    it("navigates to /question/inex+1", () => {
      const quiz = useQuizStore();
      // @ts-ignore:disable-next-line
      const navigateToSpy = vi.spyOn(global, "navigateTo");
      quiz.answerQuestion(true);
      expect(navigateToSpy).toHaveBeenCalledWith(`/question/${quiz.index + 1}`);
    });

    describe("if the index is qual to quizData.length-1", () => {
      it("it won't change the index", () => {});
      it("navigates to /restult", () => {});
    });
  });

  describe("When markQuestionAsWrong is called", () => {
    it("sets the progress result for the current index false", () => {
      const quiz = useQuizStore();
      expect(quiz.hasStarted).toBe(false);
      quiz.markQuestionAsWrong();
      expect(quiz.answerProgress[quiz.index - 1]).toBe(false);
    });

    it("sets the the index to index + 1", () => {
      const quiz = useQuizStore();
      const oldIndex = quiz.index;
      quiz.markQuestionAsWrong();
      expect(quiz.index).toBe(oldIndex + 1);
    });

    it("navigates to /question/inex+1", () => {
      const quiz = useQuizStore();
      // @ts-ignore:disable-next-line
      const navigateToSpy = vi.spyOn(global, "navigateTo");
      quiz.markQuestionAsWrong();
      expect(navigateToSpy).toHaveBeenCalledWith(`/question/${quiz.index + 1}`);
    });

    describe("if the index is qual to quizData.length-1", () => {
      it("it won't change the index", () => {});
      it("navigates to /restult", () => {});
    });
  });
});

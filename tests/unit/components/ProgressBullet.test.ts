import { describe, expect, it } from "vitest";
import { shallowMount } from "@vue/test-utils";

import ProgressBullet from "components/ProgressBullet.vue";

describe("ProgressBullet", () => {
  describe("When the answerIsCorrect prop is null", () => {
    const wrapper = shallowMount(ProgressBullet, {
      props: {
        answerIsCorrect: null,
      },
    });

    it("renders a bullet with Not answered yet title", () => {
      expect(wrapper.html()).contain(`title="Not answered yet"`);
    });

    it("renders a bullet that doesn't have eaither of the red or green classes", () => {
      expect(wrapper.classes()).not.contain(["red", "green"]);
    });
  });

  describe("When the answerIsCorrect prop is true", () => {
    const wrapper = shallowMount(ProgressBullet, {
      props: {
        answerIsCorrect: true,
      },
    });

    it("renders a bullet with Correct title", () => {
      expect(wrapper.html()).contain(`title="Correct"`);
    });

    it("renders a bullet with green class", () => {
      expect(wrapper.classes()).contain("green");
      expect(wrapper.classes()).not.contain("red");
    });
  });

  describe("When the answerIsCorrect prop is false", () => {
    const wrapper = shallowMount(ProgressBullet, {
      props: {
        answerIsCorrect: false,
      },
    });

    it("renders a bullet with Wrong title", () => {
      expect(wrapper.html()).contain(`title="Wrong"`);
    });

    it("renders a bullet with red class", () => {
      expect(wrapper.classes()).contain("red");
      expect(wrapper.classes()).not.contain("green");
    });
  });
});

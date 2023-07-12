import { describe, expect, it, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import { setActivePinia, createPinia } from "pinia";

import TimerComponent from "@/components/TimerComponent.vue";

describe("TimerComponent", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("renders the seconds remaining", () => {
    const wrapper = mount(TimerComponent);

    const remainigTime = wrapper.find("p");

    expect(remainigTime.exists()).toBeTruthy();
  });
  it("renders the timer body", () => {
    const wrapper = mount(TimerComponent);

    const timerBodyCotnainer = wrapper.find(".timer-body-container");
    const timerBody = wrapper.find(".timer-body");

    expect(timerBodyCotnainer.exists()).toBeTruthy();
    expect(timerBody.exists()).toBeTruthy();
  });

  describe("When the time runs out", () => {
    it("marks the current question as wrong", () => {});
  });
});

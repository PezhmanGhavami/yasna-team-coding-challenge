import { describe, expect, it, beforeEach, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";

import result from "@/pages/result.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";

vi.stubGlobal("navigateTo", (route: string) => {
  return route;
});

describe("result page", () => {
  // @ts-ignore:disable-next-line
  const navigateToSpy = vi.spyOn(global, "navigateTo");

  describe("if the quiz is finished", () => {
    // const wrapper = mount(result);

    it("renders the users result", () => {});

    it("renders the restart button", () => {
      // const restartButton = wrapper.findComponent(ButtonComponent);
      // expect(restartButton.exists()).toBeTruthy();
      // expect(restartButton.html()).contain("Restart");
    });
  });

  describe("if the quiz is not finished", () => {
    // const wrapper = mount(result);

    it("navigates to /", () => {
      // expect(navigateToSpy).toHaveBeenCalledWith("/");
    });
  });
});

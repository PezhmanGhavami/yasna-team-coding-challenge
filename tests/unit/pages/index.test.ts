import { describe, expect, it, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import { setActivePinia, createPinia } from "pinia";

import index from "@/pages/index.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";

describe("index page", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("renders the start button", () => {
    const wrapper = mount(index);

    const startButton = wrapper.findComponent(ButtonComponent);

    expect(startButton.exists()).toBeTruthy();
    expect(startButton.html()).contain("Start");
  });
});

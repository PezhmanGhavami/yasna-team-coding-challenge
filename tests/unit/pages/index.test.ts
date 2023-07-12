import { describe, expect, it, beforeEach, afterEach, vi } from "vitest";
import { VueWrapper, mount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";

import index from "@/pages/index.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";

describe("index page", () => {
  let wrapper: VueWrapper | null = null;

  beforeEach(() => {
    wrapper = mount(index, {
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

  it("renders the start button", () => {
    const wrapper = mount(index);

    const startButton = wrapper.findComponent(ButtonComponent);

    expect(startButton.exists()).toBeTruthy();
    expect(startButton.html()).contain("Start");
  });
});

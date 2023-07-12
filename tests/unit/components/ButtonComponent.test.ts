import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";

import ButtonComponent from "@/components/ButtonComponent.vue";

describe("ButtonComponent", () => {
  it("renders", () => {
    const wrapper = mount(ButtonComponent, {
      props: {
        text: "test text",
      },
    });
    expect(wrapper.html()).contain("test text");
  });
});

import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";

import Answer from "@/components/Answer.vue";

describe("Answer", () => {
  it("renders", () => {
    const wrapper = mount(Answer, {
      props: {
        text: "test text",
      },
    });
    expect(wrapper.html()).contain("test text");
  });
});

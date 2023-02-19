import { test, expect } from "@jest/globals";
import { mount } from "@vue/test-utils";
import HelloWorld from "./HelloWorld";

test("displays message", () => {
    // mount() returns a wrapped Vue component we can interact with
    const wrapper = mount(HelloWorld, {
        propsData: {
            msg: "Hello world",
        },
    });

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain("Hello world");
});

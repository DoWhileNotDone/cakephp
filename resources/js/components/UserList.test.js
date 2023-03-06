import { test, expect } from "@jest/globals";
import { mount } from "@vue/test-utils";
import UserList from "./UserList";

test("displays message", () => {
    // mount() returns a wrapped Vue component we can interact with
    const wrapper = mount(UserList, {
        propsData: {
            msg: "User List",
        },
    });

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain("123");
});

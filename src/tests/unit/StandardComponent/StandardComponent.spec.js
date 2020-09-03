import { shallowMount } from "@vue/test-utils";
import StandardComponent from "../../../components/StandardComponent/StandardComponent.vue";

test("Renders", () => {
  const wrapper = shallowMount(StandardComponent);
  expect(wrapper.exists()).toBe(true);
});

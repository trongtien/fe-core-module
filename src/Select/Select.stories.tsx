import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Select from "./Select";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Select",
  component: Select,
} as ComponentMeta<typeof Select>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const SelectDefault = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SelectDefault.args = {
  label: "Hello world!",
  options: [
    {
        label:"test1",
        value: 1
    },
    {
        label:"test2",
        value: 2
    }
  ]
};

export const SelectValidateError = Template.bind({});

SelectValidateError.args = {
    label: "Hello world!",
    value: "outlined",
    message:"Message error"
};
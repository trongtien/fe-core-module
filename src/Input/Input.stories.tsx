import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input from "./Input";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const InputDefault = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
InputDefault.args = {
    label: "Hello world!",
    value: "outlined"
};

export const InputNoLabel = Template.bind({});
InputNoLabel.args = {
    value: "outlined"
};

export const InputValidateError = Template.bind({});

InputValidateError.args = {
    label: "Hello world!",
    value: "outlined",
    message:"Message error"
};
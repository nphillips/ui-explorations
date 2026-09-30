import { addons } from "storybook/manager-api";
import { create } from "storybook/theming";

addons.setConfig({
  theme: create({
    base: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
    brandTitle: "ui-explorations",
    brandUrl: "https://github.com/nphillips/ui-explorations",
  }),
});

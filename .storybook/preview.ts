import type { Preview } from "@storybook/react-vite";

export default {
  parameters: {
    // Fail the a11y panel on violations instead of only listing them.
    a11y: { test: "error" },
    controls: { expanded: true },
  },
  tags: ["autodocs"],
} satisfies Preview;

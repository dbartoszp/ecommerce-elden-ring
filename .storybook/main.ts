import type { StorybookConfig } from "@storybook/nextjs";
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';




const path = require('path');

const config: StorybookConfig = {
  stories: [
    "../modules/ui/**/*.mdx",
    "../modules/ui/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-styling",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },webpackFinal: async (config) => {
    if(config.resolve){
      config.resolve.plugins=[new TsconfigPathsPlugin()]
    }
    return config;
  }
};
export default config;

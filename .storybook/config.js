import React from "react";
import { configure, addDecorator } from "@storybook/react";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

import theme from "theme";

// automatically import all files ending in *.stories.js
const req = require.context("../src", true, /.story.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

const muiThemeDecorator = story => (
  <MuiThemeProvider theme={theme}>{story()}</MuiThemeProvider>
);

addDecorator(muiThemeDecorator);

configure(loadStories, module);

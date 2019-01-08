import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { IntlProvider } from "react-intl";

import styledComponentsTheme from "styledComponentsTheme";
import { DEFAULT_LOCALE, translationMessages } from "i18n";

import GoToPayment from "components/GoToPayment";

storiesOf("Components/GoToPayment", module)
  .addDecorator(story => (
    <IntlProvider
      locale={DEFAULT_LOCALE}
      messages={translationMessages[DEFAULT_LOCALE]}
    >
      <ThemeProvider theme={styledComponentsTheme}>
        <div
          style={{
            maxWidth: 500,
            margin: "10px 10px",
            backgroundImage: "linear-gradient(264deg,#3c3e64,#1d1e2a)"
          }}
        >
          {story()}
        </div>
      </ThemeProvider>
    </IntlProvider>
  ))
  .add("Default", () => <GoToPayment />);

import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { IntlProvider } from "react-intl";

import styledComponentsTheme from "styledComponentsTheme";
import { DEFAULT_LOCALE, translationMessages } from "i18n";

import Payment from "components/Payment";
import data from "components/__fixtures__/user.fixture";

storiesOf("Components/Payment", module)
  .addDecorator(story => (
    <IntlProvider
      locale={DEFAULT_LOCALE}
      messages={translationMessages[DEFAULT_LOCALE]}
    >
      <ThemeProvider theme={styledComponentsTheme}>
        <div style={{ maxWidth: 500, margin: "10px 10px" }}>{story()}</div>
      </ThemeProvider>
    </IntlProvider>
  ))
  .add("Desktop", () => <Payment data={data} />);
//.add("Desktop without data", () => <Payment />)
//.add("Mobile", () => <Payment data={data} width="xs" />);

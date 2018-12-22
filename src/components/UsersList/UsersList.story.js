import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { IntlProvider } from "react-intl";

import styledComponentsTheme from "styledComponentsTheme";
import { DEFAULT_LOCALE, translationMessages } from "i18n";

import UsersList from "components/UsersList";
import data from "components/UsersList/__fixtures__/data.fixture";

storiesOf("Components/UsersList", module)
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
  .add("Desktop", () => <UsersList data={data} />);
//.add("Desktop without data", () => <UsersList />)
//.add("Desktop error", () => <UsersList />)
//.add("Desktop loading", () => <UsersList />);

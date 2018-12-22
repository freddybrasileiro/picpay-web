import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { IntlProvider } from "react-intl";

import styledComponentsTheme from "styledComponentsTheme";
import { DEFAULT_LOCALE, translationMessages } from "i18n";

import UserListItem from "components/UserListItem";
import data from "components/UserListItem/__fixtures__/data.fixture";

storiesOf("Components/UserListItem", module)
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
  .add("Desktop", () => <UserListItem data={data} />)
  .add("Desktop without data", () => <UserListItem />)
  .add("Mobile", () => <UserListItem data={data} width="xs" />);

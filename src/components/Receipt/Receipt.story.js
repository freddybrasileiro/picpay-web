import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { IntlProvider } from "react-intl";

import styledComponentsTheme from "styledComponentsTheme";
import { DEFAULT_LOCALE, translationMessages } from "i18n";

import Receipt from "components/Receipt";

import user from "components/__fixtures__/user.fixture";
import transaction from "components/__fixtures__/transaction.fixture";
import card from "components/__fixtures__/card.fixture";

storiesOf("Components/Receipt", module)
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
  .add("Default", () => {
    const cardNumber = card.card_number || "";
    const finalNumber = cardNumber.substring(
      cardNumber.length,
      cardNumber.length - 4
    );
    const maskNumber = `**** **** **** ${finalNumber}`;
    return <Receipt user={user} data={transaction} cardNumber={maskNumber} />;
  })
  .add("Loading", () => {
    return <Receipt isLoading={true} />;
  })
  .add("Error", () => {
    return <Receipt hasError={true} />;
  });

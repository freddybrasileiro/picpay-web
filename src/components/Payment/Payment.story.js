import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { IntlProvider } from "react-intl";

import styledComponentsTheme from "styledComponentsTheme";
import { DEFAULT_LOCALE, translationMessages } from "i18n";

import Payment from "components/Payment";
import data from "components/__fixtures__/user.fixture";
import card from "components/__fixtures__/card.fixture";
import cards from "components/__fixtures__/cards.fixture";

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
  .add("Default", () => {
    const cardNumber = card.card_number || "";
    const finalNumber = cardNumber.substring(
      cardNumber.length,
      cardNumber.length - 4
    );
    return (
      <Payment
        data={data}
        selectedCreditCard={finalNumber}
        creditCards={cards}
      />
    );
  })
  .add("Without card", () => <Payment data={data} />);

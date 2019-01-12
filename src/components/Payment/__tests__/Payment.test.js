import React from "react";
import { createShallow } from "@material-ui/core/test-utils";

import Payment from "components/Payment";

import cards from "components/__fixtures__/cards.fixture";
import card from "components/__fixtures__/card.fixture";
import data from "components/__fixtures__/user.fixture";

describe("Payment", () => {
  const shallow = createShallow({ dive: true });

  it("Should render the Payment", () => {
    const cardNumber = card.card_number || "";
    const finalNumber = cardNumber.substring(
      cardNumber.length,
      cardNumber.length - 4
    );
    expect(
      shallow(
        <Payment
          data={data}
          selectedCreditCard={finalNumber}
          creditCards={cards}
        />
      )
    ).toMatchSnapshot();
  });
});

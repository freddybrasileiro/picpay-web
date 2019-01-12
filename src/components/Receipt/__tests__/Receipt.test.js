import React from "react";
import { createShallow } from "@material-ui/core/test-utils";

import Receipt from "components/Receipt";

import user from "components/__fixtures__/user.fixture";
import transaction from "components/__fixtures__/transaction.fixture";
import card from "components/__fixtures__/card.fixture";

describe("Receipt", () => {
  const shallow = createShallow({ dive: true });

  it("Should render the Receipt", () => {
    const cardNumber = card.card_number || "";
    const finalNumber = cardNumber.substring(
      cardNumber.length,
      cardNumber.length - 4
    );
    const maskNumber = `**** **** **** ${finalNumber}`;
    expect(
      shallow(
        <Receipt user={user} data={transaction} cardNumber={maskNumber} />
      )
    ).toMatchSnapshot();
  });
});

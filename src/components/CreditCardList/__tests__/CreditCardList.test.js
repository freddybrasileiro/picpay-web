import React from "react";
import { createShallow } from "@material-ui/core/test-utils";

import CreditCardList from "components/CreditCardList";

import cards from "components/__fixtures__/cards.fixture";

describe("CreditCardList", () => {
  const shallow = createShallow({ dive: true });

  it("Should render the CreditCardList", () => {
    expect(
      shallow(<CreditCardList cards={cards} selectedCard={1} />)
    ).toMatchSnapshot();
  });
});

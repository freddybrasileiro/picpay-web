import React from "react";
import { createShallow } from "@material-ui/core/test-utils";

import CreditCardItem from "components/CreditCardItem";

import card from "components/__fixtures__/card.fixture";

describe("CreditCardItem", () => {
  const shallow = createShallow({ dive: true });

  it("Should render the CreditCardItem", () => {
    expect(shallow(<CreditCardItem card={card} />)).toMatchSnapshot();
  });
});

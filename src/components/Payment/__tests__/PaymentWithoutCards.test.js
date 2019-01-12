import React from "react";
import { createShallow } from "@material-ui/core/test-utils";

import Payment from "components/Payment";
import data from "components/__fixtures__/user.fixture";

describe("Payment", () => {
  const shallow = createShallow({ dive: true });

  it("Should render the Payment", () => {
    expect(shallow(<Payment data={data} />)).toMatchSnapshot();
  });
});

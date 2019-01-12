import React from "react";
import { createShallow } from "@material-ui/core/test-utils";

import PaymentUser from "components/PaymentUser";
import data from "components/__fixtures__/user.fixture";

describe("PaymentUser", () => {
  const shallow = createShallow({ dive: true });

  it("Should render the PaymentUser", () => {
    expect(shallow(<PaymentUser data={data} />)).toMatchSnapshot();
  });
});

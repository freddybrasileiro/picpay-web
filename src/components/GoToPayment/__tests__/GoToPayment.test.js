import React from "react";
import { createShallow } from "@material-ui/core/test-utils";

import GoToPayment from "components/GoToPayment";

describe("GoToPayment", () => {
  const shallow = createShallow({ dive: true });

  it("Should render the GoToPayment", () => {
    expect(shallow(<GoToPayment />)).toMatchSnapshot();
  });
});

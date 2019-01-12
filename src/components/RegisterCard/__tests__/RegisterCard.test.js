import React from "react";
import { createShallow } from "@material-ui/core/test-utils";

import RegisterCard from "components/RegisterCard";

describe("RegisterCard", () => {
  const shallow = createShallow({ dive: true });

  it("Should render the RegisterCard", () => {
    expect(shallow(<RegisterCard />)).toMatchSnapshot();
  });
});

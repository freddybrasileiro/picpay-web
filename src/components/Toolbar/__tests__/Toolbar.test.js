import React from "react";
import { createShallow } from "@material-ui/core/test-utils";

import Toolbar from "components/Toolbar";

describe("Toolbar", () => {
  const shallow = createShallow({ dive: true });

  it("Should render the Toolbar", () => {
    expect(shallow(<Toolbar />)).toMatchSnapshot();
  });
});

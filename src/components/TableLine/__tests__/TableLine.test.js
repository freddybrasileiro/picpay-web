import React from "react";
import { createShallow } from "@material-ui/core/test-utils";

import TableLine from "components/TableLine";

describe("TableLine", () => {
  const shallow = createShallow({ dive: true });

  it("Should render the TableLine", () => {
    expect(
      shallow(<TableLine data={{ label: "Transação", value: "8888888" }} />)
    ).toMatchSnapshot();
  });
});

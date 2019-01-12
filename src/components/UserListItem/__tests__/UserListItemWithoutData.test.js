import React from "react";
import { createShallow } from "@material-ui/core/test-utils";

import UserListItem from "components/UserListItem";
import data from "components/__fixtures__/user.fixture";

describe("UserListItem", () => {
  const shallow = createShallow({ dive: true });

  it("Should render the UserListItem", () => {
    expect(shallow(<UserListItem />)).toMatchSnapshot();
  });
});

import React from "react";
import Grid from "@material-ui/core/Grid";

import Root from "components/Toolbar/Root";
import StyledLogo from "components/Toolbar/StyledLogo";
import PicPay from "components/icons/PicPay";

const Toolbar = () => (
  <Root>
    <Grid
      container
      justify="center"
      alignItems="center"
      direction="row"
      spacing={8}
    >
      <Grid item xs={12} md={6}>
        <StyledLogo>
          <PicPay width="102" height="16" />
        </StyledLogo>
      </Grid>
    </Grid>
  </Root>
);

export default Toolbar;

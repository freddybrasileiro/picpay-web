import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core";

import Root from "./Root";
import Close from "components/icons/Close";

import Payment from "containers/Payment";

import { closeDialog as doCloseDialog } from "modules/Payment/actions";
import { DIALOG_SCREENS } from "modules/Payment/constants";
import {
  selectIsDialogOpen,
  selectDialogScreen
} from "modules/Payment/selectors";

const styles = () => ({
  header: {
    padding: "6px 12px",
    backgroundColor: "#474971"
  },
  closeButton: {
    position: "absolute",
    right: "3px",
    top: 0,
    padding: "9px"
  },
  content: {
    padding: "12px 20px"
  },
  container: {
    margin: 0,
    position: "absolute",
    top: "50px"
  }
});

const PaymentDialog = ({ classes, isOpen, screen, closeDialog }) => {
  let content;
  switch (screen) {
    case DIALOG_SCREENS.PAYMENT:
      content = <Payment />;
      break;
    case DIALOG_SCREENS.REGISTER_CARD:
      content = <div>aaa</div>;
      break;
    default:
      content = <div />;
  }

  return (
    <Dialog
      onClose={closeDialog}
      aria-labelledby="customized-dialog-title"
      open={isOpen}
      classes={{ paper: classes.container }}
    >
      <DialogTitle
        id="customized-dialog-title"
        onClose={closeDialog}
        className={classes.header}
      >
        <Typography variant="body1">Pagamento para Nome Do Usuário</Typography>
        <IconButton
          aria-label="Close"
          className={classes.closeButton}
          onClick={closeDialog}
        >
          <Close width="7" height="7" />
        </IconButton>
      </DialogTitle>
      <DialogContent className={classes.content}>
        <Root>{content}</Root>
      </DialogContent>
    </Dialog>
  );
};

const propTypes = {
  isOpen: PropTypes.bool,
  screen: PropTypes.string,
  closeDialog: PropTypes.func
};

const defaultProps = {
  isOpen: false,
  screen: DIALOG_SCREENS.PAYMENT,
  closeDialog: () => {}
};

PaymentDialog.propTypes = propTypes;
PaymentDialog.defaultProps = defaultProps;

const mapDispatchToProps = dispatch => ({
  closeDialog: () => dispatch(doCloseDialog()),
  dispatch
});

const mapStateToProps = createStructuredSelector({
  isOpen: selectIsDialogOpen(),
  screen: selectDialogScreen()
});

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PaymentDialog)
);

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { withStyles, withWidth } from "@material-ui/core";

import Root from "./Root";
import Close from "components/icons/Close";
import RightArrow from "components/icons/RightArrow";

import Payment from "containers/Payment";
import Receipt from "containers/Receipt";
import RegisterCard from "containers/RegisterCard";
import CreditCardList from "containers/CreditCardList";

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
  headerMobile: {
    padding: "8px 12px 2px 12px"
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
  },
  containerMobile: {
    boxShadow: "0 0.5px 0 0 #ffffff, 0 -0.5px 0 0 #ffffff",
    backgroundImage: "linear-gradient(211deg, #3c3e64, #1d1e2a)"
  }
});

const PaymentDialog = ({ classes, isOpen, screen, closeDialog, width }) => {
  let content;
  switch (screen) {
    case DIALOG_SCREENS.RECEIPT:
      content = <Receipt />;
      break;
    case DIALOG_SCREENS.REGISTER_CARD:
      content = <RegisterCard />;
      break;
    case DIALOG_SCREENS.CARD_LIST:
      content = <CreditCardList />;
      break;
    default:
      content = <Payment />;
  }

  return (
    <Dialog
      onClose={closeDialog}
      aria-labelledby="customized-dialog-title"
      open={isOpen}
      classes={{
        paper: width === "xs" ? classes.containerMobile : classes.container
      }}
      fullScreen={width === "xs"}
    >
      <DialogTitle
        id="customized-dialog-title"
        onClose={closeDialog}
        className={width === "xs" ? classes.headerMobile : classes.header}
      >
        {width !== "xs" && (
          <React.Fragment>
            <Typography variant="body1">Pagamento</Typography>
            <IconButton
              aria-label="Close"
              className={classes.closeButton}
              onClick={closeDialog}
            >
              <Close width="7" height="7" />
            </IconButton>
          </React.Fragment>
        )}
        {width === "xs" && (
          <div
            onClick={closeDialog}
            style={{ display: "flex", alignItems: "center" }}
          >
            <RightArrow
              width="7"
              height="7"
              style={{ transform: "rotate(180deg)" }}
            />
            <Typography variant="body1">Fechar</Typography>
          </div>
        )}
      </DialogTitle>
      <DialogContent className={classes.content}>
        <Root theme={{ width }}>{content}</Root>
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
  withWidth()(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(PaymentDialog)
  )
);

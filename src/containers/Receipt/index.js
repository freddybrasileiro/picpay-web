import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Receipt from "components/Receipt";

import {
  selectTransaction,
  selectHasError,
  selectIsLoading,
  selectSelectedCreditCard,
  selectPaymentUser
} from "modules/Payment/selectors";
import { selectUsers } from "modules/Users/selectors";
import {
  goToPayment as doGoToPayment,
  closeDialog as doCloseDialog
} from "modules/Payment/actions";

class ReceiptContainer extends Component {
  state = {
    userData: {}
  };

  componentDidMount() {
    const { users, userId } = this.props;
    const userData = users.find(u => u.id === userId);
    this.setState({ userData });
  }

  render() {
    const {
      hasError,
      isLoading,
      transaction,
      selectedCreditCard,
      goToPayment,
      closeDialog
    } = this.props;
    const cardNumber =
      (selectedCreditCard && selectedCreditCard.card_number) || "";
    const finalNumber = cardNumber.substring(
      cardNumber.length,
      cardNumber.length - 4
    );
    const maskNumber = `**** **** **** ${finalNumber}`;
    return (
      <Receipt
        hasError={hasError}
        isLoading={isLoading}
        user={this.state.userData}
        data={transaction}
        cardNumber={maskNumber}
        goToPayment={goToPayment}
        closeDialog={closeDialog}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  transaction: selectTransaction(),
  hasError: selectHasError(),
  isLoading: selectIsLoading(),
  userId: selectPaymentUser(),
  users: selectUsers(),
  selectedCreditCard: selectSelectedCreditCard()
});

const mapDispatchToProps = dispatch => ({
  goToPayment: () => dispatch(doGoToPayment()),
  closeDialog: () => dispatch(doCloseDialog()),
  dispatch
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReceiptContainer);

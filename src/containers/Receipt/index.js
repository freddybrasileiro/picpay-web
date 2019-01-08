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
    const { hasError, isLoading, transaction, selectedCreditCard } = this.props;
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

export default connect(mapStateToProps)(ReceiptContainer);

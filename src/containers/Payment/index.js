import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Payment from "components/Payment";

import {
  goToRegisterCard as doGoToRegisterCard,
  onPaymentValueChange as doOnPaymentValueChange,
  doTransaction as doDoTransaction
} from "modules/Payment/actions";
import {
  selectPaymentUser,
  selectCreditCards,
  selectSelectedCreditCard,
  selectPaymentValue
} from "modules/Payment/selectors";
import { selectUsers } from "modules/Users/selectors";

class PaymentContainer extends Component {
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
      goToRegisterCard,
      creditCards,
      selectedCreditCard,
      onPaymentValueChange,
      paymentValue,
      doTransaction
    } = this.props;
    const cardNumber = selectedCreditCard.card_number || "";
    const finalNumber = cardNumber.substring(
      cardNumber.length,
      cardNumber.length - 4
    );

    return (
      <Payment
        data={this.state.userData}
        goToRegisterCard={goToRegisterCard}
        creditCards={creditCards}
        selectedCreditCard={finalNumber}
        onPaymentValueChange={onPaymentValueChange}
        paymentValue={paymentValue}
        doTransaction={doTransaction}
      />
    );
  }
}

const propTypes = {
  userId: PropTypes.number,
  users: PropTypes.array,
  creditCards: PropTypes.array,
  selectedCreditCard: PropTypes.object,
  onPaymentValueChange: PropTypes.func
};

const defaultProps = {
  users: [],
  creditCards: [],
  selectedCreditCard: {},
  onPaymentValueChange: () => {}
};

PaymentContainer.propTypes = propTypes;
PaymentContainer.defaultProps = defaultProps;

const mapDispatchToProps = dispatch => ({
  goToRegisterCard: () => dispatch(doGoToRegisterCard()),
  onPaymentValueChange: value => dispatch(doOnPaymentValueChange(value)),
  doTransaction: () => dispatch(doDoTransaction()),
  dispatch
});

const mapStateToProps = createStructuredSelector({
  userId: selectPaymentUser(),
  users: selectUsers(),
  creditCards: selectCreditCards(),
  selectedCreditCard: selectSelectedCreditCard(),
  paymentValue: selectPaymentValue()
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentContainer);

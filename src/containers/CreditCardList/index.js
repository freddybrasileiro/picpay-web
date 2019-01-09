import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CreditCardList from "components/CreditCardList";

import {
  selectSelectedCreditCardIndex,
  selectCreditCards
} from "modules/Payment/selectors";

class CreditCardListContainer extends Component {
  state = {
    selectedCard: -1
  };

  componentDidMount() {
    this.setState({ selectedCard: this.props.selectedCreditCard });
  }

  render() {
    const { creditCards } = this.props;
    return (
      <CreditCardList
        cards={creditCards}
        selectedCard={this.state.selectedCard}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  creditCards: selectCreditCards(),
  selectedCreditCard: selectSelectedCreditCardIndex()
});

export default connect(mapStateToProps)(CreditCardListContainer);

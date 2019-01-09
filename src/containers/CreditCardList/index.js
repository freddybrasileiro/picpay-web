import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CreditCardList from "components/CreditCardList";

import {
  goToRegisterCard as doGoToRegisterCard,
  setSelectedCreditCard as doSetSelectedCreditCard
} from "modules/Payment/actions";
import {
  selectSelectedCreditCardIndex,
  selectCreditCards
} from "modules/Payment/selectors";

class CreditCardListContainer extends Component {
  state = {
    selectedCard: -1
  };

  componentDidMount = () =>
    this.setState({ selectedCard: this.props.selectedCreditCard });

  handleOnClick = index => this.setState({ selectedCard: index });

  render() {
    const { creditCards, goToRegisterCard, setSelectedCreditCard } = this.props;
    return (
      <CreditCardList
        cards={creditCards}
        selectedCard={this.state.selectedCard}
        onCardClick={this.handleOnClick}
        goToRegisterCard={goToRegisterCard}
        setSelectedCreditCard={setSelectedCreditCard}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  goToRegisterCard: () => dispatch(doGoToRegisterCard()),
  setSelectedCreditCard: index => dispatch(doSetSelectedCreditCard(index)),
  dispatch
});

const mapStateToProps = createStructuredSelector({
  creditCards: selectCreditCards(),
  selectedCreditCard: selectSelectedCreditCardIndex()
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreditCardListContainer);

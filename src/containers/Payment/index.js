import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Payment from "components/Payment";

//import { closeDialog as doCloseDialog } from "modules/Payment/actions";
import { selectPaymentUser } from "modules/Payment/selectors";
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
    return <Payment data={this.state.userData} />;
  }
}

const propTypes = {
  userId: PropTypes.number,
  users: PropTypes.array
};

const defaultProps = {
  users: []
};

PaymentContainer.propTypes = propTypes;
PaymentContainer.defaultProps = defaultProps;

const mapDispatchToProps = dispatch => ({
  //closeDialog: () => dispatch(doCloseDialog()),
  dispatch
});

const mapStateToProps = createStructuredSelector({
  userId: selectPaymentUser(),
  users: selectUsers()
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentContainer);

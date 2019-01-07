import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import RegisterCard from "components/RegisterCard";

import {
  registerCard as doRegisterCard,
  onRegisterCardFormChange as doOnRegisterCardFormChange
} from "modules/Payment/actions";
import { selectRegisterCardFormData } from "modules/Payment/selectors";

const RegisterCardContainer = ({
  registerCard,
  onRegisterCardFormChange,
  registerCardFormData
}) => (
  <RegisterCard
    registerCard={registerCard}
    onRegisterCardFormChange={onRegisterCardFormChange}
    registerCardFormData={registerCardFormData}
  />
);

const propTypes = {
  registerCard: PropTypes.func
};

const defaultProps = {
  registerCard: () => {}
};

RegisterCardContainer.propTypes = propTypes;
RegisterCardContainer.defaultProps = defaultProps;

const mapDispatchToProps = dispatch => ({
  registerCard: () => dispatch(doRegisterCard()),
  onRegisterCardFormChange: data => dispatch(doOnRegisterCardFormChange(data)),
  dispatch
});

const mapStateToProps = createStructuredSelector({
  registerCardFormData: selectRegisterCardFormData()
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterCardContainer);
